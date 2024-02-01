import ButtonContact from './ButtonContact';

const ButtonsContact = () => {
  return (
    <div className="flex justify-center space-x-3 sm:justify-start">
      <ButtonContact backgroundColor={'white'} textColor={'text-vintedGreen'}>
        Contacter
      </ButtonContact>
      <ButtonContact
        backgroundColor={'bg-vintedGreen'}
        textColor={'text-white'}
      >
        Suivre
      </ButtonContact>
    </div>
  );
};

export default ButtonsContact;
