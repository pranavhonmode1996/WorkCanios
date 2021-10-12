const mongoose = require('mongoose');
const AdminProfile = mongoose.model('adminProfilDetails');
const AddAdminDetails = async(req, res) => {
    const data = req.body;

    // checking is there any data in the body if yes then go further
    if(req.body) {
        const details = new AdminProfile({
            firstName: data.firstName,
            lastName: data.lastName,
            MobileNumber: data.mobileNumber,
            email: data.email,
            destination: data.desig,
            age: data.age,
            gender: data.gender,
            currentLocation: data.currentLocation,
            workDetails: {
                totalExperience: data.exp,
              workingHrs: data.workingHars,
              from: data.timeFrom,
              to: data.timeTo,
              baseCharges: data.baseAmount,
            },
        })

        // Saving the details in a database
        await details.save()
        .then(() => {res.status(200).json({message: 'Admin details uploaded successfully.'})});
    }
}

module.exports = {
    AddAdminDetails
}