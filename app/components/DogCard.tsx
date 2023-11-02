"use client";
import Image from "next/image";
import { StandardButton } from "./StandardButton";
import { Modal } from "./Modal";
import { useState } from "react";

type Dog = {
  name: string;
  breed: string;
  image: string;
  imageDescription: string;
  description: string;
  age: number;
  innoculations: string;
  diseases: string;
  parasites: string;
};

export const DogCard = ({ dog }: any) => {
  const [dogModalOpen, setDogModalOpen] = useState(false);
  const [selectedDog, setSelectedDog] = useState<Dog | null>(null);
  return (
    <>
      <div className="dog-card">
        <div className="dog-image-container">
          <Image
            src={dog.image}
            alt={dog.imageDescription}
            width={500}
            height={500}
          />
        </div>
        <div className="card-dog-info">
          <h3 className="card-dog-name">{dog.name}</h3>
          <span className="card-dog-breed">{dog.breed}</span>
          <StandardButton
            styleType="unhovered"
            whichType="button"
            onClick={() => {
              setDogModalOpen(true);
              setSelectedDog(dog);
            }}
          >
            Conheça
          </StandardButton>
        </div>
      </div>
      <Modal isOpen={dogModalOpen} onClose={() => setDogModalOpen(false)}>
        {selectedDog && (
          <>
            <div className="modal-image-container">
              <Image
                src={selectedDog.image}
                alt={selectedDog.imageDescription}
                width={150}
                height={150}
              />
            </div>
            <div className="modal-dog-info">
              <h2 className="modal-dog-name">{selectedDog.name}</h2>
              <span className="modal-dog-breed">{selectedDog.breed}</span>
              <p className="modal-dog-description">{selectedDog.description}</p>
              <ul className="modal-other-info">
                <li className="modal-list-item">
                  <p>
                    <strong>Idade:</strong> {selectedDog.age} ano(s)
                  </p>
                </li>
                <li className="modal-list-item">
                  <p>
                    <strong>Inoculações:</strong> {selectedDog.innoculations}
                  </p>
                </li>
                <li className="modal-list-item">
                  <p>
                    <strong>Doenças:</strong> {selectedDog.diseases}
                  </p>
                </li>
                <li className="modal-list-item">
                  <p>
                    <strong>Parasitas:</strong> {selectedDog.parasites}
                  </p>
                </li>
              </ul>
            </div>
          </>
        )}
      </Modal>
    </>
  );
};
