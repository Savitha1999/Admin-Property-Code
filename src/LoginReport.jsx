
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {Col,Row } from 'react-bootstrap';
// // import './App.css';
// import { Helmet } from 'react-helmet';

// const LoginReport = () => {
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [filterNumber, setFilterNumber] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [error, setError] = useState(null);
  

//   // Fetch data using Axios
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`${process.env.REACT_APP_API_URL}/user/all`);
        
//         if (response.status === 200 && Array.isArray(response.data.data)) {
//           setData(response.data.data);
//           setFilteredData(response.data.data);
//         } else {
//           setError('Error: Invalid response structure or empty data');
//         }
//       } catch (err) {
//         console.error('Error fetching data:', err);
//         setError('Error fetching data. Please check your API or network.');
//       }
//     };

//     fetchData();
//   }, []);

//   // Filter data whenever the inputs change
//   useEffect(() => {
//     const result = data.filter(
//       (item) =>
//         (!filterNumber || item.phone.toString().includes(filterNumber)) &&
//         (!startDate || new Date(item.loginDate) >= new Date(startDate)) &&
//         (!endDate || new Date(item.loginDate) <= new Date(endDate))
//     );
//     setFilteredData(result);
//   }, [filterNumber, startDate, endDate, data]);




//   const handleDelete = async (phone) => {
//     // Prompt the user to input the reason for deleting
//     const reason = prompt('Please provide a reason for deleting the user:');
  
//     try {
//       const response = await axios.post(`${process.env.REACT_APP_API_URL}/user/deleteDate`, {
//         phone: phone,
//         issueDetails: reason, // Send the reason for deletion (optional)
//       });
  
//       if (response.status === 200) {
//         alert(`User with phone ${phone} has been marked as deleted.`);
//         // Optionally, you can refresh the data to reflect the deleted status in the UI
//       }
//     } catch (error) {
//       console.error('Error deleting user:', error);
//       alert('Error deleting user. Please try again.');
//     }
//   };
  

//   // Handle Ban action
// const handleBan = async (phone) => {
//   const reason = prompt('Enter a reason for banning this user:'); // You can get the reason dynamically from the user

//   if (!reason) {
//     alert('Ban action canceled. Reason is required.');
//     return;
//   }

//   try {
//     const response = await axios.post(`${process.env.REACT_APP_API_URL}/user/ban`, {
//       phone: phone,
//       reason: reason,
//     });

//     if (response.status === 200) {
//       alert(`User with phone number ${phone} banned successfully`);
//       // Optionally update the UI to reflect the banned status
//       // You can update the state or refresh the data
//     }
//   } catch (error) {
//     console.error('Error banning user:', error);
//     alert('Error banning user. Please try again.');
//   }
// };

// const handleReport = async (phone) => {
//   const issueDetails = prompt('Please enter the details of the issue reported:'); // Get issue details from the user

//   if (!issueDetails) {
//     alert('Report action canceled. Issue details are required.');
//     return;
//   }

//   try {
//     // Make the POST request to the server with phone and issueDetails in the request body
//     const response = await axios.post(`${process.env.REACT_APP_API_URL}/user/report`, {
//       phone: phone,
//       issueDetails: issueDetails, // Pass the details of the issue being reported
//     });

//     if (response.status === 200) {
//       alert(`Issue reported successfully for user with phone number ${phone}`);
//       // Optionally update the UI to reflect the new report date
//       // You can refresh the data or update the state accordingly
//     }
//   } catch (error) {
//     console.error('Error reporting issue:', error);
//     alert('Error reporting issue. Please try again.');
//   }
// };


//   return (
//     <>
//       <Helmet>
//         <title>Admin Login Report</title>
//       </Helmet>
//       <div>
//           <h1 className="nav-title" style={{ fontWeight: 'bold',color:'rgb(52, 60, 106)', fontSize:'1.125rem' }}>Admin Login Report</h1>

// <div className="d-flex flex-column flex-md-row mb-5 p-3 loginformsearch">
//           <Row className="w-100">
//             <Col xs={12} sm={12}  lg={4}>
//             <label>Phone Number</label>
//               <input
//                 type="number"
//                 placeholder="Number"
//                 value={filterNumber}
//                 onChange={(e) => setFilterNumber(e.target.value)}
//                 className="form-control rounded-0 mt-2"
//                 style={{
//                   background: 'transparent ',
//                   outline: 'none',
//                   border: '1px solid #005f8c',
//                   borderRadius: '8px',
//                   color: '#005f8c',
//                   fontWeight: 'bold',
//                   padding: '8px 12px',
//                   marginRight: '8px',
//                   transition: 'all 0.3s ease',
                  
//                 }}
//               />
//             </Col>
//             <Col xs={12} sm={12}  lg={4}>
//             <label>Start Date</label>
//               <input
//                 type="date"
//                 value={startDate}
//                 onChange={(e) => setStartDate(e.target.value)}
//                 className="form-control rounded-0 mt-2"
//                 style={{
//                   background: 'transparent ',
//                   outline: 'none',
//                   border: '1px solid #005f8c',
//                   borderRadius: '8px',
//                   color: '#005f8c',
//                   fontWeight: 'bold',
//                   padding: '8px 12px',
//                   marginRight: '8px',
//                   transition: 'all 0.3s ease',
//                 }}
//               />
//             </Col>
//             <Col xs={12} sm={12} lg={4}>
//             <label>End Date</label>
//               <input
//                 type="date"
//                 value={endDate}
//                 onChange={(e) => setEndDate(e.target.value)}
//                 className="form-control rounded-0 mt-2"
//                 style={{
//                   background: 'transparent',
//                   outline: 'none',
//                   border: '1px solid #005f8c',
//                   borderRadius: '8px',
//                   color: '#005f8c',
//                   fontWeight: 'bold',
//                   padding: '8px 12px',
//                   transition: 'all 0.3s ease',
//                 }}
//               />
//             </Col>
//           </Row>
//         </div>

//         <h1 style={{ fontWeight: 'bold',color:'rgb(52, 60, 106)', fontSize:'1.125rem' }}>Login details</h1>
//     <div className="table-responsive rounded p-3">
//   <table className="table p-3" style={{borderRadius:'25px'}}>
//     <thead className="fixed text-center">
//       <tr>
//         <th>S.No</th>
//         <th>Phone</th>
//         <th>OTP</th>
//         <th>Login Date</th>
//         <th>OTP Status</th>
//         <th>Country Code</th>
//         <th>Login Mode</th>
//         <th>Report Date</th>
//         <th>Deleted Date</th>
//         <th>Version</th>
//         <th>Staff Name</th>
//         <th>Remarks</th>
//         <th>Banned Date</th>
//         <th>Actions</th>
//       </tr>
//     </thead>
//     <tbody>
//       {error ? (
//         <tr>
//           <td colSpan="14" className="text-center text-danger">
//             {error}
//           </td>
//         </tr>
//       ) : filteredData.length > 0 ? (
//         filteredData.map((item, index) => (
//           <tr key={item._id}>
//             <td>{index + 1}</td>
//             <td>{item.phone}</td>
//             <td>{item.otp}</td>
//             <td>{new Date(item.loginDate).toLocaleDateString()}</td>
//             <td>{item.otpStatus}</td>
//             <td>{item.countryCode}</td>
//             <td>{item.loginMode}</td>
//             <td>
//               {item.reportDate ? (
//                 <>
//                   <strong>Date:</strong> {new Date(item.reportDate).toLocaleDateString()}<br />
//                   <strong>Issue:</strong> {item.issueDetails || 'No details'}
//                 </>
//               ) : 'N/A'}
//             </td>
//             <td>
//               {item.deletedDate ? (
//                 <>
//                   <strong>Date:</strong> {new Date(item.deletedDate).toLocaleDateString()}<br />
//                   <strong>Reason:</strong> {item.issueDetails || 'No reason'}
//                 </>
//               ) : 'N/A'}
//             </td>
//             <td>{item.version || 'N/A'}</td>
//             <td>{item.staffName || 'N/A'}</td>
//             <td>{item.remarks || 'N/A'}</td>
//             <td>
//               {item.bannedDate ? (
//                 <>
//                   <strong>Date:</strong> {new Date(item.bannedDate).toLocaleDateString()}<br />
//                   <strong>Reason:</strong> {item.bannedReason || 'No reason'}
//                 </>
//               ) : 'N/A'}
//             </td>
//             <td>
//               <div className="d-flex flex-column flex-md-row gap-2">
//                 <button className="btn loginrepbtn btn-sm" onClick={() => handleDelete(item.phone)}>Delete</button>
//                 <button className="btn  loginrepbtn btn-sm" onClick={() => handleBan(item.phone)}>Ban</button>
//                 <button className="btn  loginrepbtn btn-sm" onClick={() => handleReport(item.phone)}>Report</button>
//               </div>
//             </td>
//           </tr>
//         ))
//       ) : (
//         <tr>
//           <td colSpan="14" className="text-center">
//             No data available
//           </td>
//         </tr>
//       )}
//     </tbody>
//   </table>
// </div>

// </div>
//     </>
//   );
// };

// export default LoginReport;


















// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {Col,Row } from 'react-bootstrap';
// // import './App.css';
// import { Helmet } from 'react-helmet';

// const LoginReport = () => {
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [filterNumber, setFilterNumber] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [error, setError] = useState(null);
  

//   // Filter data whenever the inputs change
//   useEffect(() => {
//     const result = data.filter(
//       (item) =>
//         (!filterNumber || item.phone.toString().includes(filterNumber)) &&
//         (!startDate || new Date(item.loginDate) >= new Date(startDate)) &&
//         (!endDate || new Date(item.loginDate) <= new Date(endDate))
//     );
//     setFilteredData(result);
//   }, [filterNumber, startDate, endDate, data]);



// const handleReport = async (phone) => {
//   const issueDetails = prompt('Please enter the details of the issue reported:'); // Get issue details from the user

//   if (!issueDetails) {
//     alert('Report action canceled. Issue details are required.');
//     return;
//   }

//   try {
//     // Make the POST request to the server with phone and issueDetails in the request body
//     const response = await axios.post(`${process.env.REACT_APP_API_URL}/user/report`, {
//       phone: phone,
//       issueDetails: issueDetails, // Pass the details of the issue being reported
//     });

//     if (response.status === 200) {
//       alert(`Issue reported successfully for user with phone number ${phone}`);
//       // Optionally update the UI to reflect the new report date
//       // You can refresh the data or update the state accordingly
//     }
//   } catch (error) {
//     console.error('Error reporting issue:', error);
//     alert('Error reporting issue. Please try again.');
//   }
// };

//   // ✅ Move fetchData outside useEffect so it can be used elsewhere
//   const fetchData = async () => {
//     try {
//       const response = await axios.get(`${process.env.REACT_APP_API_URL}/user/all`);

//       if (response.status === 200 && Array.isArray(response.data.data)) {
//         setData(response.data.data);
//         setFilteredData(response.data.data);
//       } else {
//         setError('Error: Invalid response structure or empty data');
//       }
//     } catch (err) {
//       console.error('Error fetching data:', err);
//       setError('Error fetching data. Please check your API or network.');
//     }
//   };

//   // Call fetchData when component mounts
//   useEffect(() => {
//     fetchData();
//   }, []);



//   const handleToggleStatus = async (phone, action) => {
//     const reason = prompt(`Enter a reason for ${action === "delete" ? "deleting" : "banning"} this user:`);
  
//     if (!reason) {
//       alert(`${action.charAt(0).toUpperCase() + action.slice(1)} action canceled. Reason is required.`);
//       return;
//     }
  
//     try {
//       const response = await axios.post(`${process.env.REACT_APP_API_URL}/user/toggleStatus`, {
//         phone,
//         action, // "delete" or "ban"
//         reason,
//       });
  
//       if (response.status === 200) {
//         alert(`User with phone ${phone} status updated to ${response.data.data.status}`);
  
//         // Store the updated user status in localStorage
//         localStorage.setItem(phone, JSON.stringify({
//           status: response.data.data.status,
//           reason: reason,
//         }));
  
//         fetchData(); // ✅ Call fetchData to refresh the list after update
//       }
//     } catch (error) {
//       console.error(`Error toggling user status:`, error);
//       alert('Error updating user status. Please try again.');
//     }
//   };
  

//   return (
//     <>
//       <Helmet>
//         <title>Admin Login Report</title>
//       </Helmet>
//       <div>
//           <h1 className="nav-title" style={{ fontWeight: 'bold',color:'rgb(52, 60, 106)', fontSize:'1.125rem' }}>Admin Login Report</h1>

// <div className="d-flex flex-column flex-md-row mb-5 p-3 loginformsearch">
//           <Row className="w-100">
//             <Col xs={12} sm={12}  lg={4}>
//             <label>Phone Number</label>
//               <input
//                 type="number"
//                 placeholder="Number"
//                 value={filterNumber}
//                 onChange={(e) => setFilterNumber(e.target.value)}
//                 className="form-control rounded-0 mt-2"
//                 style={{
//                   background: 'transparent ',
//                   outline: 'none',
//                   border: '1px solid #005f8c',
//                   borderRadius: '8px',
//                   color: '#005f8c',
//                   fontWeight: 'bold',
//                   padding: '8px 12px',
//                   marginRight: '8px',
//                   transition: 'all 0.3s ease',
                  
//                 }}
//               />
//             </Col>
//             <Col xs={12} sm={12}  lg={4}>
//             <label>Start Date</label>
//               <input
//                 type="date"
//                 value={startDate}
//                 onChange={(e) => setStartDate(e.target.value)}
//                 className="form-control rounded-0 mt-2"
//                 style={{
//                   background: 'transparent ',
//                   outline: 'none',
//                   border: '1px solid #005f8c',
//                   borderRadius: '8px',
//                   color: '#005f8c',
//                   fontWeight: 'bold',
//                   padding: '8px 12px',
//                   marginRight: '8px',
//                   transition: 'all 0.3s ease',
//                 }}
//               />
//             </Col>
//             <Col xs={12} sm={12} lg={4}>
//             <label>End Date</label>
//               <input
//                 type="date"
//                 value={endDate}
//                 onChange={(e) => setEndDate(e.target.value)}
//                 className="form-control rounded-0 mt-2"
//                 style={{
//                   background: 'transparent',
//                   outline: 'none',
//                   border: '1px solid #005f8c',
//                   borderRadius: '8px',
//                   color: '#005f8c',
//                   fontWeight: 'bold',
//                   padding: '8px 12px',
//                   transition: 'all 0.3s ease',
//                 }}
//               />
//             </Col>
//           </Row>
//         </div>

//         <h1 style={{ fontWeight: 'bold',color:'rgb(52, 60, 106)', fontSize:'1.125rem' }}>Login details</h1>
//     <div className="table-responsive rounded p-3">
//   <table className="table p-3" style={{borderRadius:'25px'}}>
//     <thead className="fixed text-center">
//       <tr>
//         <th>S.No</th>
//         <th>Phone</th>
//         <th>OTP</th>
//         <th>Login Date</th>
//         <th>OTP Status</th>
//         <th>Country Code</th>
//         <th>Login Mode</th>
//         <th>Report Date</th>
//         <th>Deleted Date</th>
//         <th>Version</th>
//         <th>Staff Name</th>
//         <th>Remarks</th>
//         <th>Banned Date</th>
//         <th>Actions</th>
//       </tr>
//     </thead>
//     <tbody>
//       {error ? (
//         <tr>
//           <td colSpan="14" className="text-center text-danger">
//             {error}
//           </td>
//         </tr>
//       ) : filteredData.length > 0 ? (
//         filteredData.map((item, index) => (
//           <tr key={item._id}>
//             <td>{index + 1}</td>
//             <td>{item.phone}</td>
//             <td>{item.otp}</td>
//             <td>{new Date(item.loginDate).toLocaleDateString()}</td>
//             <td>{item.otpStatus}</td>
//             <td>{item.countryCode}</td>
//             <td>{item.loginMode}</td>
//             <td>
//               {item.reportDate ? (
//                 <>
//                   <strong>Date:</strong> {new Date(item.reportDate).toLocaleDateString()}<br />
//                   <strong>Issue:</strong> {item.issueDetails || 'No details'}
//                 </>
//               ) : 'N/A'}
//             </td>
            // <td>
            //   {item.deletedDate ? (
            //     <>
            //       <strong>Date:</strong> {new Date(item.deletedDate).toLocaleDateString()}<br />
            //       <strong>Reason:</strong> {item.issueDetails || 'No reason'}
            //     </>
            //   ) : 'N/A'}
            // </td>
//             <td>{item.version || 'N/A'}</td>
//             <td>{item.staffName || 'N/A'}</td>
//             <td>{item.remarks || 'N/A'}</td>
            // <td>
            //   {item.bannedDate ? (
            //     <>
            //       <strong>Date:</strong> {new Date(item.bannedDate).toLocaleDateString()}<br />
            //       <strong>Reason:</strong> {item.bannedReason || 'No reason'}
            //     </>
            //   ) : 'N/A'}
            // </td>
//             <td>
//               <div className="d-flex flex-column flex-md-row gap-2">
              
//                 <button className="btn  loginrepbtn btn-sm" onClick={() => handleReport(item.phone)}>Report</button>
//               </div>
//             </td>
//             <td>
//   <div className="d-flex flex-column flex-md-row gap-2">
//     <button className="btn loginrepbtn btn-sm" onClick={() => handleToggleStatus(item.phone, 'delete')}>
//       {item.status === 'deleted' ? 'Restore' : 'Delete'}
//     </button>
//     <button className="btn loginrepbtn btn-sm" onClick={() => handleToggleStatus(item.phone, 'ban')}>
//       {item.status === 'banned' ? 'Unban' : 'Ban'}
//     </button>
//   </div>
// </td>

//           </tr>
//         ))
//       ) : (
//         <tr>
//           <td colSpan="14" className="text-center">
//             No data available
//           </td>
//         </tr>
//       )}
//     </tbody>
//   </table>
// </div>

// </div>
//     </>
//   );
// };

// export default LoginReport;













import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const LoginReport = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filterNumber, setFilterNumber] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [error, setError] = useState(null);

  // Filter data whenever the inputs change
  useEffect(() => {
    const result = data.filter(
      (item) =>
        (!filterNumber || item.phone.toString().includes(filterNumber)) &&
        (!startDate || new Date(item.loginDate) >= new Date(startDate)) &&
        (!endDate || new Date(item.loginDate) <= new Date(endDate))
    );
    setFilteredData(result);
  }, [filterNumber, startDate, endDate, data]);

  // Handle reporting
  const handleReport = async (phone) => {
    const issueDetails = prompt('Please enter the details of the issue reported:');
    if (!issueDetails) {
      alert('Report action canceled. Issue details are required.');
      return;
    }

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/user/report`, {
        phone: phone,
        issueDetails: issueDetails,
      });

      if (response.status === 200) {
        alert(`Issue reported successfully for user with phone number ${phone}`);
      }
    } catch (error) {
      console.error('Error reporting issue:', error);
      alert('Error reporting issue. Please try again.');
    }
  };

  // Fetch data using Axios
  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/user/all`);

      if (response.status === 200 && Array.isArray(response.data.data)) {
        setData(response.data.data);
        setFilteredData(response.data.data);
      } else {
        setError('Error: Invalid response structure or empty data');
      }
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Error fetching data. Please check your API or network.');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleToggleStatus = async (phone, action) => {
    const reason = prompt(`Enter a reason for ${action === "delete" ? "deleting" : "banning"} this user:`);

    if (!reason) {
      alert(`${action.charAt(0).toUpperCase() + action.slice(1)} action canceled. Reason is required.`);
      return;
    }

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/user/toggleStatus`, {
        phone,
        action,
        reason,
      });

      if (response.status === 200) {
        alert(`User with phone ${phone} status updated to ${response.data.data.status}`);
        localStorage.setItem(phone, JSON.stringify({
          status: response.data.data.status,
          reason: reason,
        }));
        fetchData();
      }
    } catch (error) {
      console.error('Error toggling user status:', error);
      alert('Error updating user status. Please try again.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin Login Report</title>
      </Helmet>
      <div className="container">
        <h1 className="text-center mb-4 text-dark font-weight-bold">Admin Login Report</h1>

        <div className="d-flex flex-column flex-md-row mb-4 p-3">
          <Row className="w-100">
            <Col xs={12} sm={12} lg={4}>
              <label className="font-weight-bold">Phone Number</label>
              <input
                type="number"
                placeholder="Search by number"
                value={filterNumber}
                onChange={(e) => setFilterNumber(e.target.value)}
                className="form-control mt-2 p-2"
                style={{
                  border: '1px solid #005f8c',
                  borderRadius: '8px',
                  color: '#005f8c',
                }}
              />
            </Col>
            <Col xs={12} sm={12} lg={4}>
              <label className="font-weight-bold">Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="form-control mt-2 p-2"
                style={{
                  border: '1px solid #005f8c',
                  borderRadius: '8px',
                  color: '#005f8c',
                }}
              />
            </Col>
            <Col xs={12} sm={12} lg={4}>
              <label className="font-weight-bold">End Date</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="form-control mt-2 p-2"
                style={{
                  border: '1px solid #005f8c',
                  borderRadius: '8px',
                  color: '#005f8c',
                }}
              />
            </Col>
          </Row>
        </div>

        <h2 className="text-primary font-weight-bold mb-4">Login Details</h2>

        <div className="table-responsive rounded p-3">
          <table className="table table-striped table-hover shadow-sm rounded">
            <thead className="text-center">
              <tr>
                <th>S.No</th>
                <th>Phone</th>
                <th>OTP</th>
                <th>Login Date</th>
                <th>OTP Status</th>
                <th>Country Code</th>
                <th>Login Mode</th>
                <th>Report Date</th>
                <th>Deleted Date</th>
                <th>Version</th>
                <th>Staff Name</th>
                <th>Remarks</th>
                <th>Banned Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {error ? (
                <tr>
                  <td colSpan="14" className="text-center text-danger">{error}</td>
                </tr>
              ) : filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>{item.phone}</td>
                    <td>{item.otp}</td>
                    <td>{new Date(item.loginDate).toLocaleDateString()}</td>
                    <td>{item.otpStatus}</td>
                    <td>{item.countryCode}</td>
                    <td>{item.loginMode}</td>
                    <td>{item.reportDate ? new Date(item.reportDate).toLocaleDateString() : 'N/A'}</td>
                    {/* <td>{item.deletedDate ? new Date(item.deletedDate).toLocaleDateString() : 'N/A'}</td> */}
                   
                    <td>
              {item.deletedDate ? (
                <>
                  <strong>Date:</strong> {new Date(item.deletedDate).toLocaleDateString()}<br />
                  <strong>Reason:</strong> {item.issueDetails || 'No reason'}
                </>
              ) : 'N/A'}
            </td>
                   
                    <td>{item.version || 'N/A'}</td>
                    <td>{item.staffName || 'N/A'}</td>
                    <td>{item.remarks || 'N/A'}</td>
                    {/* <td>{item.bannedDate ? new Date(item.bannedDate).toLocaleDateString() : 'N/A'}</td> */}
                   
                    <td>
              {item.bannedDate ? (
                <>
                  <strong>Date:</strong> {new Date(item.bannedDate).toLocaleDateString()}<br />
                  <strong>Reason:</strong> {item.bannedReason || 'No reason'}
                </>
              ) : 'N/A'}
            </td>
                   
                    <td>
                      <div className="d-flex flex-column flex-md-row gap-2">
                        <button className="btn btn-warning btn-sm" onClick={() => handleReport(item.phone)}>
                          Report
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleToggleStatus(item.phone, 'delete')}
                        >
                          {item.status === 'deleted' ? 'Restore' : 'Delete'}
                        </button>
                        <button
                          className="btn btn-secondary btn-sm"
                          onClick={() => handleToggleStatus(item.phone, 'ban')}
                        >
                          {item.status === 'banned' ? 'Unban' : 'Ban'}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="14" className="text-center">No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default LoginReport;
