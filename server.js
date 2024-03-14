import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(cors());

// Обработчик для корневого URL
app.get('/', (req, res) => {
    // Перенаправляем запрос на /get-file-content
    res.redirect('/get-file-content');
});

// Обработчик для получения содержимого файла
app.get('/get-file-content', async (req, res) => {
    try {
      const fileUrl = 'https://drive.google.com/uc?export=download&id=1FJ6-cxOf7RflfDXCjfM99RuPLPp8anT0';
      const response = await fetch(fileUrl);
      const data = await response.text();
      
      // Github API accessToken
      console.log(data);
      res.send(data);
    } catch (error) {
      console.error('Ошибка при чтении файла:', error);
      res.status(500).send('Ошибка при чтении файла');
    }
  });
  
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Прокси-сервер запущен на порту ${PORT}`);
  });