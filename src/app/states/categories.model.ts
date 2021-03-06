import { formatDate } from "@angular/common";
export class CategoriesTable {
  id: number;
  _id: string;
  state_name: string;
  createdAt: number;
  status: string;
  postcode_from: number;
  postcode_to: number;
  constructor(advanceTable) {
    {
      this._id = advanceTable._id || "";
      this.state_name = advanceTable.state_name || "";
      this.createdAt =
        advanceTable.createdAt || formatDate(new Date(), "yyyy-MM-dd", "en");
      this.status = advanceTable.status || 1;
      this.postcode_from = advanceTable.postcode_from || 0;
      this.postcode_to = advanceTable.postcode_to || 0;
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
