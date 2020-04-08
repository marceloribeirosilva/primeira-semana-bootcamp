const express = require('express');

const app = express();
app.use(express.json());

app.get('/projects', (request, response)=>{
  return response.json([
    'Projeto1',
    'Projeto2'
  ])
});

app.post('/projects', (request, response) => {
  return response.json([
    'Projeto1',
    'Projeto2'
  ])
})

app.put('/projects/:id', (request, response) => {
  return response.json([
    'Projeto1',
    'Projeto2'
  ])
})

app.delete('/projects/:id', (request, response) => {
  return response.json([
    'Projeto2'
  ])
})

app.listen(3333, ()=>{
  console.log('🤑️ Back-End started!')
});