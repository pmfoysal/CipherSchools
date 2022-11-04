import { TextboxContainer } from './textbox.styled';

export default function Textbox({ holder, name, value, setter, line }) {
   return (
      <TextboxContainer>
         <span>{name}</span>
         <textarea
            placeholder={holder}
            rows={line}
            spellCheck='false'
            autoCorrect='off'
            value={value}
            onChange={e => setter(e.target.value)}
         ></textarea>
      </TextboxContainer>
   );
}
