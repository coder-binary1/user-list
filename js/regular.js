function loadUser() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        let img = "dsd";
        fetch("https://xsgames.co/randomusers/avatar.php?g=male").then(
          (res) => {
            img = res.url;
            // console.log(img);
          }
        );
        // console.log(element);
        const tableBody = document.getElementById("table-body");
        const tr = document.createElement("tr");
        tr.innerHTML = `<tr>
                        <th>
                            <label>
                                <input type="checkbox" class="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div class="flex items-center gap-3">
                                <div class="font-bold">${element.id}</div>
                            </div>
                        </td>
                        <td>
                            <div class="flex items-center gap-3">
                                <div class="avatar">
                                    <div class="mask mask-squircle h-12 w-12">
                                        <img src=${element?.img}
                                            alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold">${element.name}</div>
                                    <div class="text-sm opacity-50">${element.username}</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            ${element.company.name}
                            <br />
                            <span class="badge badge-warning badge-sm">${element.address.city}</span>
                        </td>
                        <td>www.${element.website}</td>
                        <th>
                            <button class="btn btn-success btn-xs">active</button>
                        </th>
                    </tr>`;
        tableBody.appendChild(tr);
      });
    });
}

// fetch("https://xsgames.co/randomusers/avatar.php?g=male").then((res) => {
//   const container = document.getElementById("image-container");
//   const div = document.createElement("div");
//   div.innerHTML = `<img src=${res.url} alt="">`;
//   container.appendChild(div);
// });

// const loadImg = async () => {
//   const res = await fetch("https://xsgames.co/randomusers/avatar.php?g=male");
//   //   console.log(res.url);
//   return res.url;
// };
