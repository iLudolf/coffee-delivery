import { Input } from "../../../../components/Input";
import { AddressFormContainer } from "./styles";
import { useFormContext } from 'react-hook-form';

interface Errors {
  errors: {
    [key: string]: {
      message: string;
    }
  }
}


export function AddressForm() {

  const { register, formState } = useFormContext();

  const { errors } = formState as unknown as Errors

  return (
    <AddressFormContainer>
      <Input
        placeholder="Cep"
        className="cep"
        type="number"
        {...register('cep', { required: "Informe o CEP" })}
        error={errors.cep?.message}
      />
      <Input
        placeholder="Rua"
        className="street"
        {...register('street', { required: "Informe o endereço" })}
        error={errors.street?.message}
      />
      <Input
        placeholder="Número"
        type="number"
        {...register('number')}
      />
      <Input
        placeholder="Complemento"
        className="complement"
        {...register('complement')}
      />
      <Input
        placeholder="Bairro"
        {...register('neighborhood')}
      />
      <Input
        placeholder="Cidade"
        {...register('city', { required: "Informe a cidade" })}
        error={errors.city?.message}
      />
      <Input
        placeholder="UF"
        {...register('uf', { required: "Informe o estado" })}
        error={errors.city?.message}
      />
    </AddressFormContainer>
  )
}