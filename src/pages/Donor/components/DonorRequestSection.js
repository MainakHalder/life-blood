import React from "react";
import { BloodBankRequest } from "./BloodBankRequest";
import { useAuth } from "../../../contexts/auth-context";
import { db } from "../../../firebase";
import { doc, updateDoc } from "firebase/firestore";

const DonorRequestSection = ({ BloodBankRequests, setBloodBankRequests }) => {
  const { userUID, user } = useAuth();

  const onAcceptHandler = (request) => {
    const updatedReq = BloodBankRequests.map((el) => {
      if (el.id === request.id) return { ...el, isAccepted: true };
      return el;
    });
    (async () => {
      await updateDoc(doc(db, "requests", "6B5EW5l9P0sIA260gwxN"), {
        [request.uid]: updatedReq,
      });
      await updateDoc(doc(db, "blood_bank", userUID), {
        bloodData: {
          ...user.bloodData,
          [request.bloodGroup]:
            Number(user.bloodData[request.bloodGroup]) -
            Number(request.quantity),
        },
      });
    })();
    setBloodBankRequests(updatedReq);
  };

  return (
    <div className="flex flex-col space-y-1 justify-center items-center border-2 border-red-300 shadow-lg rounded-lg">
      <div className="">
        <h1 className="font-bold text-xl tracking-wide">Donation Request</h1>
      </div>
      <div className="p-2">
        <div className="border-2 flex flex-row space-x-2 p-2">
          <h1>Blood Bank Name</h1>
          <h1>Blood Bank Location</h1>
        </div>
        <div className="w-full p-2 flex-col">
          {BloodBankRequests.map((el) => {
            if (!el.isAccepted)
              return (
                <BloodBankRequest
                  request={el}
                  onAcceptHandler={onAcceptHandler}
                />
              );
            else return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default DonorRequestSection;
