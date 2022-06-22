class Contact {
  
  get id() {
    return this._id;
  }
  set id(id) {
    this._id = id;
  }

  get name() {
    return this._name;
  }
  set name(name) {
    let nameRegex = RegExp("^[A-Z]{1}[A-Za-z\\s]{2,}$");
    if (nameRegex.test(name)) {
      this._name = name;
    } else {
      throw "Invalid Name!";
    }
  }

  get phoneNumber() {
    return this._phoneNumber;
  }
  set phoneNumber(phoneNumber) {
    let phoneNumberRegex = RegExp("^([1-9]+[0-9]+)\\s{0,1}[0-9]{10}$");
    if (phoneNumberRegex.test(phoneNumber)) {
      this._phoneNumber = phoneNumber;
    } else {
      throw "Invalid Phone Number!";
    }   
  }

  get address() {
    return this._address;
  }
  set address(address) {
    let addressRegex = RegExp('^[a-zA-Z0-9#,&]{4,}$');
    if (addressRegex.test(address)) {
        this._address = address;
      } else {
        throw "Invalid Address";
      }   
    }
  
  get city() {
    return this._city;
  }
  set city(city) {
    this._city = city;
  }
  
  get state() {
    return this._state;
  }
  set state(state) {
    this._state = state;
  }

  get zip() {
    return this._zip;
  }
  set zip(zip) {
    let zipRegex = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");
    if (zipRegex.test(zip)) {
      this._zip = zip;
    } else {
      throw "Invalid Zip!";
    }
  }
  
  toString(){
    return `id ${this.id} \nName ${this.name} \nPhone Number ${this.phoneNumber} \nAddress ${this.address} \nCity ${this.city} \nState ${this.state} \nZip  ${this.zip}`;
}
}
