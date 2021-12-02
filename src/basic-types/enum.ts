// NOTES: ------------------------------------------------------------ //
// Enums are a feature added to JavaScript by TypeScript which allows for describing
// a value which could be one of a set of possible named constants.

enum Alert {
  SUCCESS = 'Success',
  FAILED = 'Failed',
}

const message = {
  text: 'Data has been',
  action: 'Update',
  type: Alert.SUCCESS,
};
