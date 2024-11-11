import dynamic from 'next/dynamic';

const InputMask = dynamic(() => import('react-input-mask'), { ssr: false });

function InputMaskComponent() {
  return (
    <InputMask mask="(99) 9999-9999" maskChar=" " placeholder="Telefone" />
  );
}

export default InputMaskComponent;
