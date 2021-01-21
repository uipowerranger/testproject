export class ProfileUser {
  _id: string;
  first_name: string;
  last_name: string;
  email_id: string;
  phone_number: string;
  address: string;
  city: string;
  state: string;
  post_code: string;
  designation: string;
  password: string;
  new_password: string;
  cnew_password: string;
  image: string;

  constructor(data) {
    this._id = data.id || "";
    this.image = data.image || "";
    this.first_name = data.first_name || "";
    this.last_name = data.last_name || "";
    this.email_id = data.email_id || "";
    this.phone_number = data.phone_number || "";
    this.address = data.address || "";
    this.city = data.city || "";
    this.state = data.state || "";
    this.post_code = data.post_code || "";
    this.designation = data.designation || "";
    this.password = data.password || "";
    this.new_password = data.new_password || "";
    this.cnew_password = data.cnew_password || "";
  }
}
