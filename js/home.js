window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml="<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Action</th></tr>"
    let employeePayrollData=createEmployeePayrollJSON()[0];
    const innerHtml = `${headerHtml}
<tr>
    <td><img style="margin-left: auto;margin-right: auto;" class="profile" alt=""
            src="${employeePayrollData._profilePic}"></td>
    <td>${employeePayrollData._name}</td>
    <td>${employeePayrollData._gender}</td>
    <td>${getDeptHtml(employeePayrollData._department)}</td>
    <td>${employeePayrollData._salary}</td>
    <td>${employeePayrollData._startDate}</td>
    <td class="edit-delete">
        <img style="width: 18px;" id="1" name="${employeePayrollData._id}" onclick="remove(this)" alt="delete" src="/assets/icon/delete.png">
        <img name="${employeePayrollData._id}" onclick="update(this)" alt="edit" src="/assets/icon/edit.png">
    </td>
</tr>
    `;
    document.querySelector('#table-display').innerHTML = innerHtml;
}

const createEmployeePayrollJSON=()=>{
    let empPayrollListLocal=[
        {
            _name:'Ratnadip Bharde',
            _gender:'Male',
            _department:[
                'Engineering',
                'Finance'
            ],
            _salary:'5000000',
            _startDate:'29 Oct 2019',
            _note:'this is note',
            _id:new Date().getTime(),
            _profilePic:'/assets/profile-images/image1.jpg'
        },
        {
            _name:'Prashik Kamble',
            _gender:'Male',
            _department:[
                'Engineering','HR'
            ],
            _salary:'6500000',
            _startDate:'30 Oct 2019',
            _note:'this is note',
            _id:new Date().getTime(),
            _profilePic:'/assets/profile-images/image3.jpg'
        }
    ];
    return empPayrollListLocal;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for(const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml
}