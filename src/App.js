import React from "react";
import { MainContent, Card } from "./components";
import FeedbackForm from "./FeedbackForm";

function App() {
  return (
    <div className="app-container">
      <MainContent title="Bem-vindo!">
        <p>Este é um conteúdo principal.</p>
      </MainContent>
      <Card title="Card de Exemplo">
        <p>Conteúdo dentro do Card.</p>
      </Card>
      <FeedbackForm />
    </div>
  );
}

export default App;
