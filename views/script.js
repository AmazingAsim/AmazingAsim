var projects;
fetch('./projects.json').then((res)=>{return res.json()}).then(r=>
    {
          r.forEach(p=>{
            let grid=document.querySelector('.grid');
            let griditem=document.createElement('div');
            griditem.innerHTML=` <div class="card text-white bg-light text-dark mb-3" style="max-width: 18rem;">
            <div class="card-header" style="background-color:var(--purple); color:black;">${p.name}</div>
            <div class="card-body">
              <h5 class="card-title">${p.name}</h5>
              <p class="card-text">${p.desc}.</p>
            </div>
            <div class="card-footer">
            <a href="${p.url}" class="btn btn-danger">visit site</a>
            <a href="${p.git}" class="btn btn-danger">source code</a>
            </div>
          </div> `
          griditem.setAttribute('class','col-sm-4  col-12 projectgrid')
                grid.appendChild(griditem)
          })
    })



