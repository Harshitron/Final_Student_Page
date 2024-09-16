import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { X } from 'lucide-react';

const ApplyNow = () => {
  const [formData, setFormData] = useState({
    // Personal Details
    name: '',
    fatherName: '',
    motherName: '',
    dob: '',
    gender: '',
    category: '',
    email: '',
    familyIncome: '',

    // College Details
    collegeName: '',
    collegeAddress: '',
    collegeEmail: '',
    enrollmentNumber: '',
    institutionCode: '',
    collegeBankName: '',
    collegeAccountNumber: '',
    collegeIFSC: '',
    collegeBankAddress: '',
    courseDuration: '',
    courseName: '',
    feesPerYear: '',
    totalFees: '',

    // Address Details
    address: '',
    city: '',
    state: '',
    pincode: '',

    // Academic Details
    academicRecords: [{ exam: '', board: '', yearOfPass: '', totalMarks: '', marksObtained: '' }],

    // Documents
    photograph: null,
    signature: null,
    aadharCard: null,
    tenthCertificate: null,
    twelfthCertificate: null,
    casteCertificate: null,
    incomeCertificate: null,
    domicileCertificate: null,
    disabilityCertificate: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileUpload = (e) => {
    const { name, files } = e.target;
    if (files[0]) {
      setFormData({ ...formData, [name]: files[0] });
      toast.success(`${name} uploaded successfully`);
    }
  };

  const handleAcademicRecordChange = (index, field, value) => {
    const updatedRecords = [...formData.academicRecords];
    updatedRecords[index][field] = value;
    setFormData({ ...formData, academicRecords: updatedRecords });
  };

  const addAcademicRecord = () => {
    setFormData({
      ...formData,
      academicRecords: [...formData.academicRecords, { exam: '', board: '', yearOfPass: '', totalMarks: '', marksObtained: '' }],
    });
  };

  const removeAcademicRecord = (index) => {
    if (formData.academicRecords.length > 1) {
      const updatedRecords = formData.academicRecords.filter((_, i) => i !== index);
      setFormData({ ...formData, academicRecords: updatedRecords });
      toast.success('Exam record removed');
    } else {
      toast.error('At least one exam record is required');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulating form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(formData);
      toast.success('Application submitted successfully!');
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    }
  };

  const fetchFromDigilocker = () => {
    // Implement Digilocker fetch logic
    toast.info('Fetching from Digilocker...');
  };

  const inputClassName = "mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm bg-white shadow-sm";
  const selectClassName = "mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm bg-white shadow-sm";

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50">
      <Toaster position="top-right" />
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Apply Now - PMSSS Scholarship</h1>
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Personal Details Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Personal Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name (As per Aadhar Card)</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className={inputClassName}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="fatherName" className="block text-sm font-medium text-gray-700">Father's Name</label>
              <input
                type="text"
                id="fatherName"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleInputChange}
                required
                className={inputClassName}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="motherName" className="block text-sm font-medium text-gray-700">Mother's Name</label>
              <input
                type="text"
                id="motherName"
                name="motherName"
                value={formData.motherName}
                onChange={handleInputChange}
                required
                className={inputClassName}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                required
                className={inputClassName}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                required
                className={selectClassName}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
                className={selectClassName}
              >
                <option value="">Select Category</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
                <option value="OBC">OBC</option>
                <option value="General">General</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email ID (Optional)</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={inputClassName}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="familyIncome" className="block text-sm font-medium text-gray-700">Total Family Income (Annually)</label>
              <input
                type="number"
                id="familyIncome"
                name="familyIncome"
                value={formData.familyIncome}
                onChange={handleInputChange}
                required
                max="800000"
                className={inputClassName}
              />
              <p className="text-sm text-gray-500">Must be less than 8 Lakhs</p>
            </div>
          </div>
        </div>

        {/* College Details Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">College Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="collegeName" className="block text-sm font-medium text-gray-700">Name of College</label>
              <input
                type="text"
                id="collegeName"
                name="collegeName"
                value={formData.collegeName}
                onChange={handleInputChange}
                required
                className={inputClassName}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="collegeAddress" className="block text-sm font-medium text-gray-700">College Address</label>
              <textarea
                id="collegeAddress"
                name="collegeAddress"
                value={formData.collegeAddress}
                onChange={handleInputChange}
                required
                className={inputClassName}
              ></textarea>
            </div>
            <div className="space-y-2">
              <label htmlFor="collegeEmail" className="block text-sm font-medium text-gray-700">Official College Email ID</label>
              <input
                type="email"
                id="collegeEmail"
                name="collegeEmail"
                value={formData.collegeEmail}
                onChange={handleInputChange}
                required
                className={inputClassName}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="enrollmentNumber" className="block text-sm font-medium text-gray-700">Enrollment Number of Student</label>
              <input
                type="text"
                id="enrollmentNumber"
                name="enrollmentNumber"
                value={formData.enrollmentNumber}
                onChange={handleInputChange}
                required
                className={inputClassName}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="institutionCode" className="block text-sm font-medium text-gray-700">Institution Code</label>
              <input
                type="text"
                id="institutionCode"
                name="institutionCode"
                value={formData.institutionCode}
                onChange={handleInputChange}
                required
                className={inputClassName}
              />
            </div>
          </div>
          <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-700">College Bank Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="collegeBankName" className="block text-sm font-medium text-gray-700">College Bank Name</label>
              <input
                type="text"
                id="collegeBankName"
                name="collegeBankName"
                value={formData.collegeBankName}
                onChange={handleInputChange}
                required
                className={inputClassName}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="collegeAccountNumber" className="block text-sm font-medium text-gray-700">Account Number</label>
              <input
                type="text"
                id="collegeAccountNumber"
                name="collegeAccountNumber"
                value={formData.collegeAccountNumber}
                onChange={handleInputChange}
                required
                className={inputClassName}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="collegeIFSC" className="block text-sm font-medium text-gray-700">IFSC Code</label>
              <input
                type="text"
                id="collegeIFSC"
                name="collegeIFSC"
                value={formData.collegeIFSC}
                onChange={handleInputChange}
                required
                className={inputClassName}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="collegeBankAddress" className="block text-sm font-medium text-gray-700">Bank Address</label>
              <textarea
                id="collegeBankAddress"
                name="collegeBankAddress"
                value={formData.collegeBankAddress}
                onChange={handleInputChange}
                required
                className={inputClassName}
              ></textarea>
            </div>
          </div>
          <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-700">Course Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="courseDuration" className="block text-sm font-medium text-gray-700">Duration of Course</label>
              <input
                type="text"
                id="courseDuration"
                name="courseDuration"
                value={formData.courseDuration}
                onChange={handleInputChange}
                required
                className={inputClassName}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="courseName" className="block text-sm font-medium text-gray-700">Course Name</label>
              <input
                type="text"
                id="courseName"
                name="courseName"
                value={formData.courseName}
                onChange={handleInputChange}
                required
                className={inputClassName}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="feesPerYear" className="block text-sm font-medium text-gray-700">Fees per Year/Semester</label>
              <input
                type="number"
                id="feesPerYear"
                name="feesPerYear"
                value={formData.feesPerYear}
                onChange={handleInputChange}
                required
                className={inputClassName}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="totalFees" className="block text-sm font-medium text-gray-700">Total Fees</label>
              <input
                type="number"
                id="totalFees"
                name="totalFees"
                value={formData.totalFees}
                onChange={handleInputChange}
                required
                className={inputClassName}
              />
            </div>
          </div>
        </div>

        {/* Academic Details Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Academic Details</h2>
          {formData.academicRecords.map((record, index) => (
            <div key={index} className="mb-4 p-4 border border-gray-200 rounded-md relative">
              <h3 className="text-lg font-semibold mb-2 text-gray-600">Exam {index + 1}</h3>
              <button
                type="button"
                onClick={() => removeAcademicRecord(index)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                aria-label={`Remove Exam ${index + 1}`}
              >
                <X size={20} />
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor={`exam-${index}`} className="block text-sm font-medium text-gray-700">Exam Passed</label>
                  <input
                    type="text"
                    id={`exam-${index}`}
                    value={record.exam}
                    onChange={(e) => handleAcademicRecordChange(index, 'exam', e.target.value)}
                    required
                    className={inputClassName}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor={`board-${index}`} className="block text-sm font-medium text-gray-700">Educational Board/University</label>
                  <input
                    type="text"
                    id={`board-${index}`}
                    value={record.board}
                    onChange={(e) => handleAcademicRecordChange(index, 'board', e.target.value)}
                    required
                    className={inputClassName}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor={`yearOfPass-${index}`} className="block text-sm font-medium text-gray-700">Passing Year</label>
                  <input
                    type="number"
                    id={`yearOfPass-${index}`}
                    value={record.yearOfPass}
                    onChange={(e) => handleAcademicRecordChange(index, 'yearOfPass', e.target.value)}
                    required
                    className={inputClassName}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor={`totalMarks-${index}`} className="block text-sm font-medium text-gray-700">Total Marks</label>
                  <input
                    type="number"
                    id={`totalMarks-${index}`}
                    value={record.totalMarks}
                    onChange={(e) => handleAcademicRecordChange(index, 'totalMarks', e.target.value)}
                    required
                    className={inputClassName}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor={`marksObtained-${index}`} className="block text-sm font-medium text-gray-700">Marks Obtained</label>
                  <input
                    type="number"
                    id={`marksObtained-${index}`}
                    value={record.marksObtained}
                    onChange={(e) => handleAcademicRecordChange(index, 'marksObtained', e.target.value)}
                    required
                    className={inputClassName}
                  />
                </div>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={addAcademicRecord}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Add Another Exam
          </button>
        </div>

        {/* Address Details Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Address Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className={inputClassName}
              ></textarea>
            </div>
            <div className="space-y-2">
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                className={inputClassName}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                required
                className={inputClassName}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">Pincode</label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleInputChange}
                required
                pattern="[0-9]{6}"
                className={inputClassName}
              />
            </div>
          </div>
        </div>

        {/* Documents Upload Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Documents to Upload</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: 'photograph', label: 'Photograph' },
              { name: 'signature', label: 'Signature' },
              { name: 'aadharCard', label: 'Aadhar Card' },
              { name: 'tenthCertificate', label: '10th Certificate' },
              { name: 'twelfthCertificate', label: '12th Certificate/Diploma Certificate' },
              { name: 'casteCertificate', label: 'Caste Category Certificate' },
              { name: 'incomeCertificate', label: 'Family Income Certificate' },
              { name: 'domicileCertificate', label: 'Domicile Certificate' },
              { name: 'disabilityCertificate', label: 'Disability Certificate' },
            ].map((doc) => (
              <div key={doc.name} className="space-y-2">
                <label htmlFor={doc.name} className="block text-sm font-medium text-gray-700">{doc.label}</label>
                <input
                  type="file"
                  id={doc.name}
                  name={doc.name}
                  onChange={handleFileUpload}
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="mt-1 block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100"
                />
                {formData[doc.name] && (
                  <p className="text-sm text-green-600">File uploaded successfully</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mt-8">
          <button
            type="button"
            onClick={fetchFromDigilocker}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Fetch from Digilocker
          </button>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplyNow;