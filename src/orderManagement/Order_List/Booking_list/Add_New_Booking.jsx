import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";
import { BsFiletypeScss } from "react-icons/bs";

const Add_New_Booking = () => {
  const [data, setData] = useState({
    orderNo: '',
    InvoiceNo: '',
    Creater: '',
    TotalQty: '',
    TotalCM: ''
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="w-100 bg-white" style={{ height: "100vh" }}>
      <div className="w-auto ms-3 pt-2 h-10 flex flex-row justify-between">
        <h1 className="fw-bold ms-3">Add Booking Form</h1>
        <div className="sub-div w-96 ms-8 h-10">
          <button className="w-28 text-white ms-3 h-10 bg-purple-700" style={{ border: "1px solid purple", borderTop: "none", borderRight: "none", borderLeft: "none" }}>
            Booking List
          </button>
          <button className="w-40 h-10 ms-8" style={{ border: "1px solid purple", borderTop: "none", borderRight: "none", borderLeft: "none" }}>
            Add New Booking
          </button>
        </div>
      </div>
      <hr className="bg-slate-700 w-100 mt-3 ms-2" />

      <div className="flex gap-10 p-2" style={{ height: "50vh" }}>
  {/* Main Div */}
  <div className="w-96 mt-4 flex flex-col gap-5">
    <div className="flex">
      <select className="h-11 w-full px-2 border border-gray-400 rounded-lg outline-none">
        <option defaultValue>Select an Order No</option>
        <option>0000005</option>
        <option>0000002</option>
      </select>
    </div>

    <div className="flex flex-col">
      <p className="text-xs mb-1">Enter Booking Date</p>
      <input type="date" className="h-10 w-full px-2 border border-gray-400 rounded-lg outline-none" />
    </div>

    <div className="flex">
      <input type="number" placeholder="Process Loss" className="h-10 w-full px-2 border border-gray-400 rounded-lg outline-none" />
    </div>

    <div className="flex">
      <input type="text" placeholder="Rib" className="h-10 w-full px-2 border border-gray-400 rounded-lg outline-none" />
    </div>
  </div>

  {/* Second Column */}
  <div className="w-96 mt-4 flex flex-col gap-5">
    <div className="flex">
      <input type="text" placeholder="Prepared By" className="h-10 w-full px-2 border border-gray-400 rounded-lg outline-none" />
    </div>
    <div className="flex">
      <input type="text" placeholder="Composition" className="h-10 w-full px-2 border border-gray-400 rounded-lg outline-none" />
    </div>
    <div className="flex">
      <input type="text" placeholder="Others Fabric" className="h-10 w-full px-2 border border-gray-400 rounded-lg outline-none" />
    </div>
    <div className="flex">
      <input type="text" placeholder="Collar" className="h-10 w-full px-2 border border-gray-400 rounded-lg outline-none" />
    </div>
  </div>

  {/* Third Column */}
  <div className="w-96 mt-4 flex flex-col gap-5 absolute left-[63rem] ms-3 p-2">
    <div className="flex">
      <label htmlFor="upload" className="flex flex-col items-center justify-center cursor-pointer border-2  rounded-lg p-2">
        <p>Order Item Image</p>
        <input type="file" name="image" id="upload" accept="image/*" className="hidden" />
        <img src="https://erpsoftware.acnoo.com/assets/images/icons/upload.png" alt="Upload Preview" className="h-48 w-full object-cover mt-2 rounded-lg" />
      </label>
    </div>
  </div>
</div>

      {/* Table */}
      <div className="row mt-24">
        <div className="col-lg-12 table-form-section add-form-table">
          <div className="table-responsive responsive-table pb-0">
            <table className="table table-two daily-production-table-print mw-1000 booking-table" id="erp-table">
              <thead>
                <tr>
                  <td colSpan={25} rowSpan={2}><strong /></td>
                  <td colSpan={8}><strong>Collar Size/Quantity: Solid</strong></td>
                  <td rowSpan={3}><strong>Cuff Color</strong></td>
                  <td colSpan={4}><strong>Cuff Solid</strong></td>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <td><input type="text" name="header[collar_size_qty_40]" defaultValue="40X7.5" className="form-control reset-input" /></td>
                  <td><input type="text" name="header[collar_size_qty_41]" defaultValue="41X7.5" className="form-control reset-input" /></td>
                  <td><input type="text" name="header[collar_size_qty_42]" defaultValue="42X7.5" className="form-control reset-input" /></td>
                  <td><input type="text" name="header[collar_size_qty_43]" defaultValue="43X7.5" className="form-control reset-input" /></td>
                  <td><input type="text" name="header[collar_size_qty_44]" defaultValue="44X7.5" className="form-control reset-input" /></td>
                  <td><input type="text" name="header[collar_size_qty_45]" defaultValue="45X7.5" className="form-control reset-input" /></td>
                  <td><input type="text" name="header[collar_size_qty_46]" defaultValue="46X7.5" className="form-control reset-input" /></td>
                  <td><input type="text" name="header[collar_size_qty_47]" defaultValue="47X7.5" className="form-control reset-input" /></td>
                  <th><input type="text" name="header[cuff_solid_l]" defaultValue="Qty.XS-L" className="form-control reset-input" /></th>
                  <th><input type="text" name="header[cuff_solid_4xl]" defaultValue="Qty.XL-4XL" className="form-control reset-input" /></th>
                  <th><input type="text" name="header[cuff_solid_5xl]" defaultValue="Qty.XS-5XL" className="form-control reset-input" /></th>
                  <th><input type="text" name="header[cuff_solid_6xl]" defaultValue="Qty.XL-6XL" className="form-control reset-input" /></th>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <th><strong>Style</strong></th>
                  <th><strong>Color</strong></th>
                  <th><strong>Item</strong></th>
                  <th><strong>Shipment Date</strong></th>
                  <th><strong>Garments QTY</strong></th>
                  <th><strong>Unit Price</strong></th>
                  <th><strong>Total Value</strong></th>
                  <th><strong>Description Of Garments</strong></th>
                  <th><strong>Garments Picture</strong></th>
                  <th><strong>Pantone</strong></th>
                  <th><strong>Body Fabrication</strong></th>
                  <th><strong>Shell Fabric</strong></th>
                  <th><strong>Emb</strong></th>
                  <th><strong>Print</strong></th>
                  <th><strong>Applique</strong></th>
                  <th><strong>Wash</strong></th>
                  <th><strong>Thread</strong></th>
                  <th><strong>Item Qty</strong></th>
                  <th><strong>Collar Type</strong></th>
                  <th><strong>Collar Size</strong></th>
                  <th><strong>Collar Color</strong></th>
                  <th><strong>Rib</strong></th>
                  <th><strong>Cuff</strong></th>
                  <th><strong>Process Loss %</strong></th>
                  <th><strong>Collar Size</strong></th>
                  <th><strong>Rib Size</strong></th>
                  <th><strong>Composition</strong></th>
                  <th><strong>Process Loss</strong></th>
                  <th><strong>Prepared By</strong></th>
                </tr>
              </thead>
              <tbody id="order-data-table" style={{ height: "40vh" }}>
                <tr>
                  <td><input type="text" name="size_data[40][style]" id="size_data[40][style]" className="reset-input" style={{ width: "100px", outline: "none" }} /></td>
                  <td><input type="text" name="size_data[40][color]" id="size_data[40][color]" className="reset-input" style={{ width: "100px", outline: "none" }} /></td>
                  <td><input type="text" name="size_data[40][item]" id="size_data[40][item]" className="reset-input" style={{ width: "100px", outline: "none" }} /></td>
                  <td><input type="date" name="size_data[40][shipment_date]" id="size_data[40][shipment_date]" className="reset-input" style={{ width: "150px", outline: "none" }} /></td>
                  <td><input type="text" name="size_data[40][garments_qty]" id="size_data[40][garments_qty]" className="reset-input" style={{ width: "100px", outline: "none" }} /></td>
                  <td><input type="text" name="size_data[40][unit_price]" id="size_data[40][unit_price]" className="reset-input" style={{ width: "100px", outline: "none" }} /></td>
                  <td><input type="text" name="size_data[40][total_value]" id="size_data[40][total_value]" className="reset-input" style={{ width: "100px", outline: "none" }} /></td>
                  <td><input type="text" name="size_data[40][garments_description]" id="size_data[40][garments_description]" className="reset-input" style={{ width: "300px", outline: "none" }} /></td>
                  <td><input type="file" name="size_data[40][garments_picture]" id="size_data[40][garments_picture]" accept="image/*" className="reset-input" style={{ width: "150px", outline: "none" }} /></td>
                  <td><input type="text" name="size_data[40][pantone]" id="size_data[40][pantone]" className="reset-input" style={{ width: "100px", outline: "none" }} /></td>
                  <td><input type="text" name="size_data[40][body_fabrication]" id="size_data[40][body_fabrication]" className="reset-input" style={{ width: "100px", outline: "none" }} /></td>
                  <td><input type="text" name="size_data[40][shell_fabric]" id="size_data[40][shell_fabric]" className="reset-input" style={{ width: "100px", outline: "none" }} /></td>
                  <td><input type="text" name="size_data[40][emb]" id="size_data[40][emb]" className="reset-input" style={{ width: "100px", outline: "none" }} /></td>
                  <td><input type="text" name="size_data[40][print]" id="size_data[40][print]" className="reset-input" style={{ width: "100px", outline: "none" }} /></td>
                  <td><input type="text" name="size_data[40][applique]" id="size_data[40][applique]" className="reset-input" style={{ width: "100px", outline: "none" }} /></td>
                  <td><input type="text" name="size_data[40][wash]" id="size_data[40][wash]" className="reset-input" style={{ width: "100px", outline: "none" }} /></td>
                  <td><input type="text" name="size_data[40][thread]" id="size_data[40][thread]" className="reset-input" style={{ width: "100px", outline: "none" }} /></td>
                  <td><input type="text" name="size_data[40][item_qty]" id="size_data[40][item_qty]" className="reset-input" style={{ width: "100px", outline: "none" }} /></td>
                  <td><input type="text" name="size_data[40][collar_type]" id="size_data[40][collar_type]" className="reset-input" style={{ width: "100px", outline: "none" }} /></td>
                  <td><input type="text" name="size_data[40][collar_size]" id="size_data[40][collar_size]" className="reset-input" style={{ width: "100px", outline: "none" }} /></td>
                  <td><input type="text" name="size_data[40][collar_color]" id="size_data[40][collar_color]" className="reset-input" style={{ width: "100px", outline: "none" }} /></td>
                  <td><input type="text" name="size_data[40][rib]" id="size_data[40][rib]" className="reset-input" style={{ width: "100px", outline: "none" }} /></td>
                  <td><input type="text" name="size_data[40][cuff]" id="size_data[40][cuff]" className="reset-input" style={{ width: "100px", outline: "none" }} /></td>
                  <td><input type="text" name="size_data[40][process_loss]" id="size_data[40][process_loss]" className="reset-input" style={{ width: "100px", outline: "none" }} /></td>
                  <td><input type="text" name="size_data[40][collar_size_2]" id="size_data[40][collar_size_2]" className="reset-input" style={{ width: "100px", outline: "none" }} /></td>
                  <td><input type="text" name="size_data[40][rib_size]" id="size_data[40][rib_size]" className="reset-input" style={{ width: "100px", outline: "none" }} /></td>
                  <td><input type="text" name="size_data[40][composition]" id="size_data[40][composition]" className="reset-input" style={{ width: "100px", outline: "none" }} /></td>
                  <td><input type="text" name="size_data[40][process_loss_2]" id="size_data[40][process_loss_2]" className="reset-input" style={{ width: "100px", outline: "none" }} /></td>
                  <td><input type="text" name="size_data[40][prepared_by]" id="size_data[40][prepared_by]" className="reset-input" style={{ width: "100px", outline: "none" }} /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add_New_Booking;
