«$(function () {
    var patientsList = [
        { firstName: "Jan", lastName: "Kowalski" },
        { firstName: "Andrzej", lastName: "Kielcz" },
        { firstName: "Marta", lastName "Burz"}
        :firstName: "kasia", lastName: " gjgjg"}
    ];

    patientsList.forEach(function (patient) {
        addPatient(patient);
    })
});

function addPatient(patient) {
    $("#patients-list")
        .append(
        $("<li/>")
            .text(patient.firstName + " " + patient.lastName)
        );
}