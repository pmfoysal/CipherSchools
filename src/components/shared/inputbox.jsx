import { InputboxContainer, InputboxInput, InputboxName } from './inputbox.styled';

export default function Inputbox({ value, label, type, setter }) {
   return (
      <InputboxContainer>
         <InputboxInput
            type={type}
            value={value}
            placeholder={label}
            spellCheck='false'
            autoComplete='off'
            data-on={!!value}
            onChange={e => setter(e.target.value)}
         />
         <InputboxName>{label}</InputboxName>
      </InputboxContainer>
   );
}
