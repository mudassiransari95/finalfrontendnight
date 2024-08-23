import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';

const CashAdjustmentModal = ({ isOpen, handleCancel, handleOk, type, selectedAdjustment }) => {
  const [adjustment, setAdjustment] = useState('');
  const [adjustmentType, setAdjustmentType] = useState('');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [description, setDescription] = useState('');
  const [adjustmentDate, setAdjustmentDate] = useState('');

  useEffect(() => {
    if (type === 'edit' && selectedAdjustment) {
      setAdjustment(selectedAdjustment.adjustment);
      setAdjustmentType(selectedAdjustment.type);
      setAmount(selectedAdjustment.amount);
      setNote(selectedAdjustment.note);
      setDescription(selectedAdjustment.description);
      setAdjustmentDate(selectedAdjustment.adjustmentDate);
    }
  }, [type, selectedAdjustment]);

  const handleSave = async () => {
    const payload = {
      adjustment,
      type: adjustmentType,
      amount,
      note,
      description,
      adjustmentDate,
    };

    try {
      const response = await fetch(
        type === 'add'
          ? 'http://localhost:8080/acc/cash/create'
          : `http://localhost:8080/acc/cash/update/${selectedAdjustment._id}`,
        {
          method: type === 'add' ? 'POST' : 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(`${type === 'add' ? 'Adjustment added' : 'Adjustment updated'} successfully:`, data);
        handleOk(); // Close the modal on success
      } else {
        console.error('Failed to save adjustment:', response.statusText);
      }
    } catch (error) {
      console.error('Error saving adjustment:', error);
    }
  };

  return (
    <Modal
      open={isOpen}
      width={"80vw"}
      title={type === 'add' ? 'Add New Adjustment' : 'Edit Adjustment'}
      onOk={handleSave}
      onCancel={handleCancel}
      footer={(_, { OkBtn, CancelBtn }) => (
        <div style={{ textAlign: "center" }}>
          <CancelBtn />
          <OkBtn />
        </div>
      )}
    >
      <div>
        <form>
          <div className="row my-4">
            <div className="col input-wrapper">
              <label htmlFor="adjustment">Adjustment</label>
              <input
                type="text"
                className="form-control input-wrapper"
                placeholder="Enter Adjustment"
                value={adjustment}
                onChange={(e) => setAdjustment(e.target.value)}
              />
            </div>
            <div className="col input-wrapper">
              <label htmlFor="type">Type</label>
              <input
                type="text"
                className="form-control input-wrapper"
                placeholder="Enter Type"
                value={adjustmentType}
                onChange={(e) => setAdjustmentType(e.target.value)}
              />
            </div>
          </div>
          <div className="row my-4">
            <div className="col input-wrapper">
              <label htmlFor="amount">Amount</label>
              <input
                type="number"
                className="form-control input-wrapper"
                placeholder="Enter Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="col input-wrapper">
              <label htmlFor="note">Note</label>
              <input
                type="text"
                className="form-control input-wrapper"
                placeholder="Enter Note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </div>
          </div>
          <div className="row my-4">
            <div className="col input-wrapper">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control input-wrapper"
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="col input-wrapper">
              <label htmlFor="adjustmentDate">Adjustment Date</label>
              <input
                type="date"
                className="form-control input-wrapper"
                value={adjustmentDate}
                onChange={(e) => setAdjustmentDate(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default CashAdjustmentModal;
