"use client";
import { Logo } from "../components/Logo";
import { useForm } from "react-hook-form";
import { StandardButton } from "../components/StandardButton";

type FormData = {
  firstName: string;
  lastName?: string;
  date: number;
  subject?: string;
  message: string;
  email: string;
};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function Schedule() {
  const mainTitleColor = "#ebc7ae";
  const mainTextColor = "#fdfdfd";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({
    shouldFocusError: true,
  });

  const onSuccess = () => {
    reset();
  };

  const onSubmit = async (data: any) => {
    await sleep(2000);
    console.log(data);
    onSuccess();
  };

  return (
    <>
      <section className="form-container">
        <Logo titleColor={mainTitleColor} textColor={mainTextColor} />
        <p className="form-title">
          Preencha o formulário abaixo para agendar sua visita!
        </p>
        {isSubmitSuccessful && (
          <p className="success">
            Recebemos sua mensagem! Entraremos em contato em até 24 horas para
            confirmar!
          </p>
        )}
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="input-container">
            <label aria-label="Nome" htmlFor="nome" className="label">
              Nome*
            </label>
            <input
              id="nome"
              className="input"
              aria-invalid={errors.firstName ? "true" : "false"}
              autoComplete="on"
              placeholder="Informe seu nome"
              {...register("firstName", {
                required: "Informe pelo menos seu primeiro nome.",
                minLength: {
                  value: 2,
                  message: "O nome precisa ter no mínimo 2 caracteres.",
                },
                maxLength: {
                  value: 50,
                  message: "O nome deve ter no máximo 50 caracteres.",
                },
              })}
            />
            <p className="error">{errors.firstName?.message}</p>
          </fieldset>
          <fieldset className="input-container">
            <label aria-label="Sobrenome" htmlFor="sobrenome" className="label">
              Sobrenome
            </label>
            <input
              id="sobrenome"
              className="input"
              {...register("lastName")}
              placeholder="Informe seu sobrenome, se desejar"
            />
          </fieldset>
          <fieldset className="input-container">
            <label
              aria-label="Escolha uma data"
              htmlFor="data"
              className="label"
            >
              Escolha uma data*
            </label>
            <input
              id="data"
              aria-invalid={errors.date ? "true" : "false"}
              className="input"
              {...register("date", {
                required: "Você precisa escolher uma data.",
              })}
              type="date"
              min="2023-11-05"
            />
            <p className="error">{errors.date?.message}</p>
          </fieldset>
          <fieldset className="input-container">
            <label aria-label="E-mail" htmlFor="email" className="label">
              E-mail*
            </label>
            <input
              id="email"
              aria-invalid={errors.email ? "true" : "false"}
              className="input"
              placeholder="Informe seu e-mail"
              autoComplete="on"
              {...register("email", {
                required: "Informe seu e-mail.",
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                  message: "Informe um e-mail válido.",
                },
              })}
            />
            <p className="error">{errors.email?.message}</p>
          </fieldset>
          <fieldset className="input-container">
            <label aria-label="Assunto" htmlFor="assunto" className="label">
              Assunto
            </label>
            <input
              id="assunto"
              className="input"
              {...register("subject")}
              placeholder="Informe o assunto, para facilitar."
            />
          </fieldset>
          <fieldset className="input-container">
            <label aria-label="Mensagem" htmlFor="mensagem" className="label">
              Mensagem*
            </label>
            <textarea
              id="mensagem"
              className="textarea"
              placeholder="Escreva aqui sua mensagem."
              {...register("message", {
                required:
                  "Diga brevemente por que gostaria de nos visitar ou se tem alguma dúvida que gostaria de esclarecer.",
                minLength: {
                  value: 10,
                  message: "A mensagem deve ter no mínimo 10 caracteres.",
                },
                maxLength: {
                  value: 500,
                  message: "A mensagem deve ter no máximo 500 caracteres.",
                },
              })}
              rows={5}
            ></textarea>
            <p className="error">{errors.message?.message}</p>
          </fieldset>
          <StandardButton styleType="form-button" whichType="submit">
            {isSubmitting ? "Enviando..." : "Enviar"}
          </StandardButton>
        </form>
      </section>
    </>
  );
}
