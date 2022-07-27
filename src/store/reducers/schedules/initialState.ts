export const initialState = {
  list: [{
    id: '',
    customer: [{
      id: '',
      name: '',
      document: '',
      phone: '',
      email: '',
      birthday: null
    }],
    employee: [{
      id: '',
      name: '',
      document: '',
      phone: '',
      email: '',
      salary: null,
      birthday: null
    }],
    service: [{
      id: '',
      service: '',
      price: null,
    }],
    date: null
  }],
  loading: false,
}