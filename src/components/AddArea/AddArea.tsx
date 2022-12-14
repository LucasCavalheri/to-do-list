import { KeyboardEvent, useState } from 'react';
import * as C from './AddArea.styles';

type Props = {
  onEnter: (taskName: string) => void;
};

const AddArea = ({ onEnter }: Props) => {
  const [inputText, setInputText] = useState<string>('');

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === 'Enter' && inputText !== '') {
      onEnter(inputText);
      setInputText('');
    }
  };

  return (
    <C.Container>
      <C.PlusIcon>➕</C.PlusIcon>
      <C.Input
        type={'text'}
        placeholder='Adicione uma tarefa'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </C.Container>
  );
};

export default AddArea;
