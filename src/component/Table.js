import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const Table = () => {
    return (
        <MDBTable>
            <MDBTableHead color="#00b8d4 cyan accent-4" textWhite>
                <tr>
                    <th>อันดับ</th>
                    <th>Name</th>
                    <th>ชื่อ</th>
                    <th>ภาค</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                <tr>
                    <td>1</td>
                    <td>Bangkok</td>
                    <td>กรุงเทพมหานคร</td>
                    <td>ภาคกลาง</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Chiang Mai</td>
                    <td>เชียงใหม่</td>
                    <td>ภาคเหนือ</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Phuket</td>
                    <td>ภูเก็ต</td>
                    <td>ภาคใต้</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Kanchanaburi</td>
                    <td>กาญจนบุรี</td>
                    <td>ภาคตะวันตก</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Ayutthaya</td>
                    <td>อยุธยา</td>
                    <td>ภาคกลาง</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Surat Thani</td>
                    <td>สุราษฏร์ธานี</td>
                    <td>ภาคใต้</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Buri Ram</td>
                    <td>บุรีรัมย์</td>
                    <td>ภาคตะวันออกเฉียงเหนือ</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Sukhothai</td>
                    <td>สุโขทัย</td>
                    <td>ภาคกลาง</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Mae Hong Son</td>
                    <td>แม่ฮ่องสอน</td>
                    <td>ภาคเหนือ</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Chiang Rai</td>
                    <td>เชียงราย</td>
                    <td>ภาคเหนือ</td>
                </tr>
            </MDBTableBody>
        </MDBTable>
    );
}

export default Table;