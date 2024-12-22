const loadUser = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const tableBody = document.getElementById("table-body");
  for (const element of data) {
    const avatar = await fetch(
      "https://xsgames.co/randomusers/avatar.php?g=male"
    );
    const img = avatar.url;
    console.log(element);
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
                                        <img src=${img}
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
                            <button class="btn btn-success btn-xs text-white">active</button>
                        </th>
                    </tr>`;
    tableBody.appendChild(tr);
  }
};
