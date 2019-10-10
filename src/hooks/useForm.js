import { useState } from "react";

export const useForm = initialState => {
  const [form, setForm] = useState(initialState);

  function valider(input) {}

  function handleInput(event) {
    const triggered = form.find(item => item.name === event.target.name)
    // console.log(triggered)
    const input = {...triggered, value: event.target.value };
    setForm([...form.filter(item => item.name !== input.name), input]);
  }

  function asObject() {
    let formToObject = {};
    form.forEach(element => {
      formToObject = { ...formToObject, [element.name]: element };
    });

    return formToObject;
  }
  return { form: asObject(), handleInput };
};
