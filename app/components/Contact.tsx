"use client";

import { useState } from "react";
import Image from "next/image";
import email from "@/app/assets/images/icons/email.svg";
import phone from "@/app/assets/images/icons/phone.svg";
import storeAddress from "@/app/assets/images/icons/store-location.svg";
import shelterAddress from "@/app/assets/images/icons/shelter-location.svg";
import Link from "next/link";
import { AttributionsModal } from "./AttributionsModalContent/AttributionsModal";
import { Modal } from "./Modal";

export const Contact = () => {
  const [attributionsModalOpen, setAttributionsModalOpen] = useState(false);

  return (
    <section id="contato" className="contact-container">
      <div className="content-container">
        <div className="contact-dog-image" />
        <div className="contact-column">
          <h2 className="contact-column-title">Tem dúvidas ou sugestões?</h2>
          <div className="contact-info-container">
            <Image src={email} alt="E-mail" />
            <p className="contact-info">e-mail@larcanino.com.br</p>
          </div>
          <div className="contact-info-container">
            <Image src={phone} alt="Telefone" />
            <p className="contact-info">(11) 12345-1234</p>
          </div>
        </div>
        <div className="contact-column">
          <h2 className="contact-column-title">
            Venha nos visitar nos endereços abaixo
          </h2>
          <div className="contact-info-container">
            <Image src={storeAddress} alt="Ícone de endereço do petshop" />
            <div className="info-wrapper">
              <p className="contact-info">Rua do Lar Canino, 1234</p>
              <p className="contact-info">Bairro Tal, Cidade, SP</p>
              <p className="contact-info">(Petshop)</p>
            </div>
          </div>
          <div className="contact-info-container">
            <Image src={shelterAddress} alt="Ícone de endereço do abrigo" />
            <div className="info-wrapper">
              <p className="contact-info">Rua do Lar Canino, 1234</p>
              <p className="contact-info">Bairro Tal, Cidade, SP</p>
              <p className="contact-info">(Abrigo)</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p className="footer-text">
          &copy; Lar Canino - 2023. Todos os direitos reservados.
        </p>
        <p className="footer-text">
          Site desenvolvido apenas para fins educativos. As informações
          apresentadas são fictícias.
        </p>
        <p className="footer-text">
          Desenvolvido por Letícia dos Santos Viana.{" "}
          <Link
            href="/#contato"
            onClick={() => setAttributionsModalOpen(true)}
            className="link"
          >
            Atribuições relevantes
          </Link>
          .
        </p>
      </footer>
      <Modal
        isOpen={attributionsModalOpen}
        onClose={() => setAttributionsModalOpen(false)}
      >
        <AttributionsModal />
      </Modal>
    </section>
  );
};
