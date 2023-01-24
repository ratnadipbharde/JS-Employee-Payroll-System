window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml="<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Action</th></tr>"
    const innerHtml = `${headerHtml}
<tr>
    <td><img class="profile" alt=""
            src="/assets/profile-images/image1.jpg"></td>
    <td>Ratnadip Bharde</td>
    <td>Male</td>
    <td>
        <div class="dept-label">HR</div>
        <div class="dept-label">Finance</div>
    </td>
    <td>3000000</td>
    <td>1 Nov 2020</td>
    <td>
        <img style="width: 18px;" id="1" onclick="remove(this)" alt="delete"
            src="/assets/icon/delete.png">
        <img style="width: 25px;" id="2" onclick="update(this)" alt="edit" src="/assets/icon/edit.png">
    </td>
</tr>
    `;
    document.querySelector('#table-display').innerHTML = innerHtml;
}