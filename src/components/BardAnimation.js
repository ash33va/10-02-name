import React, { useRef, useEffect } from 'react';

const MovingText = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const text = 'Кайргузина Сафина'; // Ваше имя
    let x = 50; // Начальная позиция по оси X
    let y = 50; // Начальная позиция по оси Y
    let dx = 2; // Скорость движения по оси X
    let dy = 2; // Скорость движения по оси Y

    // Устанавливаем размер канваса
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const draw = () => {
      // Очищаем канвас на каждом кадре и устанавливаем цвет фона
      ctx.fillStyle = '#FF00FF'; // Цвет фона 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Устанавливаем стиль текста
      ctx.font = '48px Arial';
      ctx.fillStyle = '#00FFFF'; // Цвет текста

      // Рисуем текст
      ctx.fillText(text, x, y);

      // Обновляем позицию
      x += dx;
      y += dy;

      // Проверка, чтобы текст не выходил за пределы экрана
      if (x + ctx.measureText(text).width > canvas.width || x < 0) {
        dx = -dx; // Меняем направление по оси X
      }
      if (y + 48 > canvas.height || y < 48) { // 48 - это высота шрифта
        dy = -dy; // Меняем направление по оси Y
      }

      // Запускаем следующий кадр
      requestAnimationFrame(draw);
    };

    // Запуск анимации
    draw();

    // Очистка канваса при размонтировании компонента
    return () => {
      cancelAnimationFrame(draw);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default MovingText;
