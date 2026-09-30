export function showSuccessToast() {
  const successToast = Toast.makeText(
    document.body,
    "✅ Sucesso! Entraremos em contato em breve.",
    Toast.LENGTH_SHORT,
  );
  successToast.setStyle(Toast.STYLE_SUCCESS);
  successToast.setPosition(Toast.POSITION_TOP_CENTER);
  successToast.setAnimation(
    Toast.SLIDE_IN_TOP_CENTER,
    Toast.SLIDE_OUT_TOP_CENTER,
  );
  successToast.show();
}

export function showErrorToast() {
  const errorToast = Toast.makeText(
    document.body,
    "Usuário já registrado.",
    Toast.LENGTH_LONG,
  );
  errorToast.setStyle("error"); //Toast.STYLE_ERROR
  errorToast.setPosition(Toast.POSITION_TOP_RIGHT);
  errorToast.setAnimation(Toast.WOBBLE_IN, Toast.WOBBLE_OUT);
  errorToast.show();
}
