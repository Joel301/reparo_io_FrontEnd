
export function validateFormProfessional(currentInput) {
  const errors = {}

  if (!currentInput.firstName || currentInput.firstName === 0) errors.firstName = 'El campo nombre es obligatorio'
  if (!currentInput.lastName || currentInput.lastName === 0) errors.lastName = 'El campo apellido es obligatorio'
  if (!currentInput.email || currentInput.email === 0) errors.email = 'El correo es obligatorio'
  if (!currentInput.phoneNumber || currentInput.phoneNumber === 0) errors.phoneNumber = 'El numero de telefono es obligatorio'
  // voy a comentar la linea de la foto de perfil porque se debe revisar con la carga al bucket
  //if (!currentInput.profileImg || currentInput.profileImg === 0) errors.profileImg = 'Debe cargar una foto de perfil'
  if (!currentInput.address || currentInput.address === 0) errors.address = 'El campo dirección es obligatorio'
  if (!currentInput.password || currentInput.password === 0) errors.password = new Error('El password es obligatorio')
  if (!currentInput.password === "No coinciden") errors.password = new Error('Las contraseñas no coinciden')

  return errors
}

export function validateFormClient(currentInput) {
  const errors = {}

  if (!currentInput.firstName || currentInput.firstName === 0) errors.firstName = 'El campo nombre es obligatorio'
  if (!currentInput.lastName || currentInput.lastName === 0) errors.lastName = 'El campo apellido es obligatorio'
  if (!currentInput.password || currentInput.password === 0) errors.password = 'El password es obligatorio'
  if (!currentInput.phoneNumber || currentInput.phoneNumber === 0) errors.phoneNumber = 'El numero de telefono es obligatorio'
  // if (!currentInput.profileImg || currentInput.profileImg === 0) errors.profileImg = 'Debe cargar una foto de perfil'
  if (!currentInput.address || currentInput.address === 0) errors.address = 'El campo dirección es obligatorio'
  if (!currentInput.password || currentInput.password === 0) errors.password = new Error('El password es obligatorio')
  if (!currentInput.password === "No coinciden") errors.password = new Error('Las contraseñas no coinciden')

  return errors
}