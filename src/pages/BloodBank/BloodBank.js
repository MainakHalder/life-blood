import React from 'react';
import BankRequestSection from './components/BankRequestSection';

import RequestDonationModal from './components/RequestDonationModal';
import { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/auth-context';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../../firebase';
import ShowChart from '../../components/Chart';

const BloodBank = () => {
  const [hospitalRequests, setHospitalRequests] = useState([]);
  const { user } = useAuth();
  const [bloodData, setBloodData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Dataset 1',
        data: [],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  });
  const [bloodDataChanged, isBloodDataChanged] = useState(false);

  useEffect(() => {
    (async () => {
      const q = query(collection(db, 'blood_bank'));
      onSnapshot(q, (data) => {
        const dataObj = data.docs[0].data();

        setBloodData({
          labels: Object.keys(dataObj.bloodData).sort((a, b) => a - b),
          datasets: [
            {
              label: 'Blood Storage Data',
              data: Object.keys(dataObj.bloodData)
                .sort((a, b) => a - b)
                .map((el) => dataObj.bloodData[el]),
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
          ],
        });
      });
    })();
  }, [bloodDataChanged]);

  useEffect(() => {
    if (user) {
      (async () => {
        const q = query(collection(db, 'requests'));
        onSnapshot(q, (data) => {
          const dataObj = data.docs[0].data();
          setHospitalRequests(
            Object.keys(dataObj).reduce((acc, curr) => {
              return [...acc, ...dataObj[curr]];
            }, [])
          );
        });
      })();
    }
  }, [user]);

  return (
    <div>
      <div className='flex flex-col w-full min-h-screen justify-center items-center'>
        <div className='flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 w-full max-w-4xl p-8 sm:p-12 rounded-xl overflow-hidden'>
          <BankRequestSection
            hospitalRequests={hospitalRequests}
            setHospitalRequests={setHospitalRequests}
            isBloodDataChanged={isBloodDataChanged}
          />
          <ShowChart bloodData={bloodData} />
        </div>
        <RequestDonationModal />
      </div>
    </div>
  );
};

export default BloodBank;
