// src/components/Notification.js
import React, { useState } from 'react';
import DialogBox from './DialogBox';

const Notification = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      {isOpen && (
        <DialogBox title="Notifications" onClose={handleClose}>
          <p>Your notifications will appear here.</p>
          {/* Add more content as needed */}
        </DialogBox>
      )}
    </>
  );
};

export default Notification;
