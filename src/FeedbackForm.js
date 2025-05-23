import React, { useState } from "react";

function FeedbackForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && comment) {
      alert(`Nome: ${name}\nEmail: ${email}\nComentário: ${comment}`);
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <h2>Formulário de Feedback</h2>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder="Comentário"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FeedbackForm;
