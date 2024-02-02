/* **********************************************
Assignment 1: Ứng dụng quản lý thú cưng 

Họ và tên :Triệu Chí Công
Mã số học viên : FX23434
Lớp:K230515DN -- Chứng chỉ doanh nghiệp 
Mã môn : PRF192x_2.1-A_VN Kỹ thuật lập trình với Javascript
**************************************************/

/*********       START_CODE   ******************/

"use strict";
const submitBtn = document.getElementById("submit-btn");
const heathy_btn = document.querySelector("#healthy-btn");

const idInput = document.getElementById("input-id");
const nameInput = document.getElementById("input-name");
const ageInput = document.getElementById("input-age");
const typeInput = document.getElementById("input-type");
const weightInput = document.getElementById("input-weight");
const lengthInput = document.getElementById("input-length");
const colorInput = document.getElementById("input-color-1");
const breedInput = document.getElementById("input-breed");
const vaccinatedInput = document.getElementById("input-vaccinated");
const dewormedInput = document.getElementById("input-dewormed");
const sterilizedInput = document.getElementById("input-sterilized");

const tbodyEl = document.querySelector("#tbody");
const btnBMI = document.querySelector("#BMI-btn");
/*
pet001,pet002,pet003,pet004,pet005
  dữ liệu khởi tạo sẵn phục vụ kiểm tra 
*/
const pet001 = {
  petID: "P001",
  petName: "Tom",
  petAge: 3,
  petType: "Cat",
  petWeight: "5",
  petLenght: "50",
  petBreed: "Tabby",
  vaccin: false,
  dewormed: false,
  steri: false,
  petBMI: "?",
  date: "11/11/2011",
};
const pet002 = {
  petID: "P002",
  petName: "Tom",
  petAge: 3,
  petType: "Cat",
  petWeight: "5",
  petLenght: "50",
  petBreed: "Tabby",
  vaccin: false,
  dewormed: false,
  steri: false,
  petBMI: "?",
  date: "11/11/2011",
};
const pet003 = {
  petID: "P003",
  petName: "Tom",
  petAge: 3,
  petType: "Cat",
  petWeight: "5",
  petLenght: "50",
  petBreed: "Tabby",
  vaccin: true,
  dewormed: true,
  steri: true,
  petBMI: "?",
  date: "11/11/2011",
};
const pet004 = {
  petID: "P004",
  petName: "Tom",
  petAge: 3,
  petType: "Cat",
  petWeight: "5",
  petLenght: "50",
  petBreed: "Tabby",
  vaccin: true,
  dewormed: true,
  steri: true,
  petBMI: "?",
  date: "11/11/2011",
};
const pet005 = {
  petID: "P005",
  petName: "Tom",
  petAge: 3,
  petType: "Cat",
  petWeight: "5",
  petLenght: "50",
  petBreed: "Tabby",
  vaccin: true,
  dewormed: true,
  steri: true,
  petBMI: "?",
  date: "11/11/2011",
};
// khoi tao mang petArr luu tru cac petItem
let petArr = [];
petArr.push(pet001);
petArr.push(pet002);

petArr.push(pet003);
petArr.push(pet004);

petArr.push(pet005);

//1************************************************* Function ************************************************
// **************************************** noSpaceString FUNCTION****************************************
/*
   loại bỏ kí tự trắng - spcace - tab trong string 
   đảm bảo việc : "  P  0  0  1 " =  "P001" 
*/
var noSpaceString = (string) => {
  let newString = [];
  //duyệt qua từng phần tử của chuỗi
  for (let i = 0; i < string.length; ++i) {
    if (string[i] !== " ") {
      // kiểm tra các phần tử của chuỗi khác kí tự trắng
      newString.push(string[i]);
      // thêm kí tự hợp lệ vào mảng newString
    }
  }
  // chuyển đổi từ mảng newString thành chuỗi newString
  newString = newString.join("");
  return newString;
};
// **************************************** noSpaceString FUNCTION****************************************

// 1.1**************************************** validateHandle FUNCTION****************************************
var validateHandle = (data) => {
  // -------------------------------------- 1 KIỂM TRA ĐIỀU KIỆN TRÙNG ID------------------------------------
  /* *********************************************************************************************************

        sử dụng vòng for duyệt qua từng phần tử của mảng petArr 
        kiểm tra với điều kiện dữ liệu idInput từ ô idInput sau khi đã loại bỏ kí tự trống có trùng với id của phần tử
        nào trong mảng petArr hay không
        true ==> alert("ID must be unique!");
        false ==> trả về hàm validateHandle()= false;

    ***********************************************************************************************************/
  for (let i = 0; i < petArr.length; i++) {
    if (noSpaceString(idInput.value) === petArr[i].petID) {
      console.log(`trung id o item thu ${i}`);
      alert("ID must be unique!");
      return false;
    }
  }
  // --------------------------------- 2 KIỂM TRA ĐIỀU KIỆN CÁC Ô INPUT TRỐNG---------------------------------
  /* *********************************************************************************************************
    biến formEl: lưu trữ kết quả trả về khi dùng Dom Element lấy ra element có class .form trong file Html.
    biến inputEl: lưu trữ nodelist trả về khi đứng từ " formEl " truy cập vào tất cả các ô input có class .form-control
                  trong file Html

    ***********************************************************************************************************/
  let condition_1;
  let formEl = document.querySelector(".form");
  let inputEl = formEl.querySelectorAll(".form-control");
  /* *********************************************************************************************************
     ý tưởng giải thuật : 
    a) Sinh viên tạo thêm các div.error_message trong file Html dưới mỗi ô input ==> các div.error_message này dùng
    để hiển thị thông báo lỗi nếu người dùng để trống ô dữ liệu. ban đầu div.error_message này có value="";
    b) Sinh viên duyệt qua các phần tử được lưu trong " inputEl " 
      mỗi lần lấy ra 1 phần tử (item) đem item đi kiểm tra với điều kiện 
      dữ liệu = rỗng hoặc dữ liệu = chuỗi "Select Breed" hoặc "Select Type"
      true ==> innerText vào các div.error_message thông báo lỗi
      false==> innerText vào các div.error_message chuỗi rỗng

    ***********************************************************************************************************/
  inputEl.forEach((item) => {
    if (
      noSpaceString(item.value) === "" ||
      item.value === "Select Breed" ||
      item.value === "Select Type"
    ) {
      item.parentElement.querySelector(
        ".error_message"
      ).innerText = `vui long nhap du lieu`;
    } else {
      item.parentElement.querySelector(".error_message").innerText = "";
    }
  });
  /* *********************************************************************************************************
    biến error_message: lưu trữ node list các div.error_message 
    mảng arr_Error_Message : lưu trữ giá trị của các div.error_message

    duyệt qua mảng error_message lấy ra từng phần tử 
    mỗi lần duyệt qua từng item đem push value của item đó vào mảng arr_Error_Message
    kiểm tra tất cả các phần tử của mảng arr_Error_Message bằng rỗng hết thì điều kiện đúng 
    ***********************************************************************************************************/
  let arr_Error_Message = [];
  let error_message = document.querySelectorAll(".error_message");
  console.log(error_message);
  error_message.forEach((item) => {
    arr_Error_Message.push(item.innerText);
  });
  // --------------------------------------------------------------
  condition_1 = arr_Error_Message.every((item) => item === "");
  /* *********************************************************************************************************
      sử dụng cấu trúc rẽ nhánh if else if để lần lượt kiểm tra các điều kiện từ trên xuống dưới
      nếu có 1 trong các điều kiện sai trả về false
      còn lại trả về true
    ***********************************************************************************************************/
  if (condition_1 === false) {
    return false;
  } else if (ageInput.value < 1 || ageInput.value > 15) {
    alert("Age must be between 1 and 15!");
    ageInput.value = "";
    return false;
  } else if (weightInput.value < 1 || weightInput.value > 15) {
    alert("Weight must be between 1 and 15!");
    weightInput.value = "";
    return false;
  } else if (lengthInput.value < 1 || lengthInput.value > 100) {
    alert("Length must be between 1 and 100!");
    lengthInput.value = "";
    return false;
  } else {
    return true;
  }
};
//**************************************** end validateHandle FUNCTION****************************************
// 1.2**************************************** renderPetData FUNCTION****************************************
var renderPetData = (arr) => {
  /*
        renderPetData nhận vào đối số arr
  */
  let htmls = "";
  /*
        sử dụng toán tử 3 ngôi và template string để tạo biến addedDate lưu trữ 
        ngày : qua phương thức getDate() 
        tháng :qua phương thức getMonth()
        năm :qua phương thức getFullYear()
        theo dạng hiển thị " ngày/tháng/năm"
*/
  let getDate = new Date();
  let addDate = `${
    getDate.getDate() < 10 ? `0${getDate.getDate()}` : `${getDate.getDate()}`
  }/${
    getDate.getMonth() + 1 < 10
      ? `0${getDate.getMonth() + 1}`
      : `${getDate.getMonth() + 1}`
  }/${getDate.getFullYear()}`;
  /*
        duyệt qua các phần tử của mảng đối số được truyền vào hàm
        mỗi lần lấy ra các item ta đem nối chuỗi vào biến htmls với cac giá trị :
        petID,petName,petAge,petType,petWeight,petLenght,petBreed,petCl,vaccin,dewormed...
        dưới dạng template string
*/
  arr.map((item) => {
    htmls += `   <tr>
    <th scope="row">${item.petID}</th>
    <td>${item.petName}</td>
    <td>${item.petAge}</td>
    <td>${item.petType}</td>
    <td>${item.petWeight} kg</td>
    <td>${item.petLenght} cm</td>
    <td>${item.petBreed}</td>
    <td>
    <i class="bi bi-square-fill" style="color:${item.petCl}"></i>
    </td>
    <td><i class = ${
      item.vaccin === true
        ? `"bi bi-check-circle-fill"`
        : `"bi bi-x-circle-fill"`
    }></i></td>
    <td><i class = ${
      item.dewormed === true
        ? `"bi bi-check-circle-fill"`
        : `"bi bi-x-circle-fill"`
    }></i></td>
    <td><i class = ${
      item.steri === true
        ? `"bi bi-check-circle-fill"`
        : `"bi bi-x-circle-fill"`
    }></i></td>
    <td>${item.petBMI}</td>
    <td>${addDate}</td>
    <td>
    <button class="btn btn-danger" id="delete_btn" onclick="deletePet('${
      item.petID
    }')">Delete</button>
    </td>
  </tr>
    `;
    return htmls;
  });
  // console.log(htmls);
  /*
       sau khi có htmls ta hiển thị ra bảng bằng DOM HTML:innerHTML
 */
  tbodyEl.innerHTML = htmls;
};
// 1.2****************************************END renderPetData FUNCTION****************************************

// 1.3****************************************cleareInput FUNCTION****************************************
/*
      cleareInput() được gọi trong khi submit_btn được click
      gán value của các ô input,check box,color về rỗng ,false,"000"(màu đen) ==> giá trị ban đầu 
*/
var cleareInput = () => {
  idInput.value = "";
  nameInput.value = "";
  ageInput.value = "";
  typeInput.value = "Select Type";
  weightInput.value = "";
  lengthInput.value = "";
  breedInput.value = "Select Breed";
  vaccinatedInput.checked = false;
  dewormedInput.checked = false;
  sterilizedInput.checked = false;
  colorInput.value = "000";
};
//**************************************** End cleareInput FUNCTION****************************************

// 1.4****************************************deletePet FUNCTION****************************************
/*
    deletePet() FUNCTION nhận vào đối số là ID của phần tử cần xóa
*/
const deletePet = (PetId_Delete) => {
  let handelDelet = confirm("Are you sure");
  // biến handelDelet : lưu trữ giá trị trả về của hàm confirm("Are you sure");
  if (handelDelet) {
    /* 
    true ==> duyệt qua từng phần tử của mảng petArr 
              kiểm tra nếu điều kiện petID của item đó = với ID được truyền vào
              true ==> xóa phần tử đó trong mảng bằng phương thức .splice
    */
    petArr.map((item, index) => {
      if (item.petID === PetId_Delete) {
        console.log(index);
        petArr.splice(index, 1);
      }
    });
    /* 
            hiển thị lại bảng sau khi đã xóa 
    */
    if (coutClick % 2 === 0) {
      /* coutClick % 2 = 0 ==> true ==> dữ liệu đang hiển thị ở bảng petArr
       */
      heathy_btn.innerText = "Show Healthy Pet";
      // hiển thị lại petArr
      renderPetData(petArr);
    } else if (coutClick % 2 !== 0) {
      /* coutClick % 2 # 0 ==> true ==> dữ liệu đang hiển thị ở mảng HeathyPet
       */
      heathy_btn.innerText = "Show All Pet";
      // hiển thị lại HeathyPet
      showHeathyPet();
    }

    // heathy_btn.innerText = "Show Healthy Pet ";
  }
};
// ****************************************End deletePet FUNCTION****************************************
// 1.5****************************************showHeathyPet FUNCTION****************************************
/*
   showHeathyPet() là hàm hiển thị thú cưng khỏe mạnh với điều kiện
  dữ liệu từ các ô check box Vaccinated,Dewormed,Sterilized = true.
  điều kiện đúng ==> thêm phần tử đó vào mảng heathyPettArr

*/
var showHeathyPet = () => {
  let heathyPettArr = [];
  petArr.map((item, index) => {
    // kiểm tra từng phần tử của mảng với các trường vaccin,dewormed,steri
    if (item.vaccin === true && item.dewormed === true && item.steri === true) {
      // true ==> thêm item đó vào mảng heathyPettArr
      heathyPettArr.push(item);
    }
    console.log(heathyPettArr);
    return heathyPettArr;
  });
  // hiển thị ra bảng dữ liệu của mảng heathyPettArr
  renderPetData(heathyPettArr);
};
// ****************************************END showHeathyPet FUNCTION****************************************
// 1.5****************************************coutClickHandelt FUNCTION****************************************
/*
coutClickHandel() dùng để cập nhập trạng thái của nút Show all pet hoặc Show Healthy Pet qua số lần nhấn nút
khởi tạo biến coutClick = 0
mỗi 1 lần nhấn nút coutClick sẽ tăng thêm 1 
nếu coutClick % 2 !== 0 ==> bảng hiển thị dữ liệu mảng heathyPettArr(thú cưng khỏe mạnh)
                             heathy_btn.innerText = "Show All Pet";
 nếu coutClick % 2 === 0 ==> bảng hiển thị dữ liệu mảng PettArr(tất cả thú cưng )
                             heathy_btn.innerText = "Show Healthy Pet";

*/
let coutClick = 0;
var coutClickHandel = () => {
  coutClick = coutClick + 1;
  if (coutClick % 2 !== 0) {
    heathy_btn.innerText = "Show All Pet";
    showHeathyPet();
  } else if (coutClick % 2 === 0) {
    heathy_btn.innerText = "Show Healthy Pet";
    renderPetData(petArr);
  }
};
//****************************************End coutClickHandelt FUNCTION****************************************
// 1.6****************************************caculateHandle FUNCTION****************************************
/*
  tính chỉ số BMI theo công thức 
*/
const caculateHandle = () => {
  let BMI_Value = 0;
  // duyệt qua từng phần tử của mảng petArr
  petArr.map((item, index) => {
    if (item.petType === "Dog") {
      // nếu petType là Dog ==> chỉ số BMI được tính theo công thức dưới
      BMI_Value = (item.petWeight * 703) / item.petLenght ** 2;
    } else if (item.petType === "Cat") {
      // nếu petType là Cat ==> chỉ số BMI được tính theo công thức dưới
      BMI_Value = (item.petWeight * 886) / item.petLenght ** 2;
    }
    // làm tròn chỉ số 1 chữ số sau dấu thập phân
    item.petBMI = BMI_Value.toFixed(1);
  });
};
//****************************************End caculateHandle FUNCTION****************************************
/***********************************************END FUNCTION ************************************************/

/*2********************************************* CLICK EVENT ************************************************/
/*2.1 ********************************************* heathy_btn CLICK EVENT *********************************/

heathy_btn.addEventListener("click", () => {
  coutClickHandel();
  /*
    dữ liệu hiển thị là dữ liệu của mảng petArr hay heathyPettArr phụ thuộc vào số lần nhấn nút qua biến coutClick
 */
});

/*2.2 ********************************************* btnBMI CLICK EVENT *********************************/
btnBMI.addEventListener("click", () => {
  // tính giá trị BMI theo từng type
  caculateHandle();
  // hiển thị lại dữ liệu trong bảng
  renderPetData(petArr);
});
/*2.3 ********************************************* submitBtn CLICK EVENT *********************************/
submitBtn.addEventListener("click", () => {
  const petData = {
    petID: noSpaceString(idInput.value),
    petName: noSpaceString(nameInput.value),
    petAge: parseInt(ageInput.value),
    petType: typeInput.value,
    petWeight: parseInt(weightInput.value),
    petLenght: parseInt(lengthInput.value),
    petBreed: breedInput.value,
    vaccin: vaccinatedInput.checked,
    dewormed: dewormedInput.checked,
    petBMI: "?",
    steri: sterilizedInput.checked,
    petCl: colorInput.value,
    data: new Date(),
  };
  // biến check lưu giá trả về từ hàm validateHandle()
  let check = validateHandle();
  if (check) {
    // dữ liệu hợp lệ
    console.log("du lieu hop le");
    // xóa dữ liệu trên form input
    cleareInput();
    // thêm petData vào mảng petArr
    petArr.push(petData);
    // hiển thị lên bảng
    renderPetData(petArr);
  } else {
    console.log("du lieu sai");
  }
});

/********************************************** END CODE **********************************************************/
