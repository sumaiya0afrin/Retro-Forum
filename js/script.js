const loadPostAll = async (category)=>{
    // console.log(`https://openapi.programming-hero.com/api/retro-forum/posts${category?`?category=${category}`: ' '}`);
    document.getElementById('postContainer').innerHTML = "";
        const response = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts${category?`?category=${category}`: ' '}`);
        const data = await response.json();
        displayAllPost(data.posts);
}

const displayAllPost = (posts) =>{
        const postContainer = document.getElementById('postContainer');

        posts.forEach(post => {
            const div = document.createElement('div');

            div.innerHTML = `
            <div
            class="flex flex-col lg:flex-row bg-[#797DFC1A] border border-[#797DFC] rounded-3xl p-6 lg:p-10 gap-6"
          >
            <!-- avatar  -->
            <div class="avatar block self-center lg:self-start">
              <div class="w-20 rounded">
                <img
                  class="relative"
                  src="${post.image}"
                  alt="category"
                />
                <span
                  class="w-5 h-5  rounded-full absolute -top-2 left-16 border-2 border-white ${post.isActive ? 'bg-green-600' : 'bg-red-600'}"
                ></span>
              </div>
            </div>
            <!--card content  -->
            <div>
              <div class="flex gap-5 font-medium">
                <p># ${post.category}</p>
                <p>Author : ${post.author.name}</p>
              </div>
              <h3 class="font-bold text-xl mt-2 mb-4">
              ${post.title}
              </h3>
              <p class="text-descColor">
              ${post.description}
              </p>
              <div class="divider divide-dashed"></div>
              <!-- count container  -->
              <div class="block lg:flex items-center justify-between">
                <!-- count  -->
                <div class="flex space-x-6 text-descColor">
                  <!-- count-1  -->
                  <div class="flex gap-2">
                    <!-- icon  -->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                      />
                    </svg>

                    <p>${post.comment_count}</p>
                  </div>
                  <!-- count-2  -->
                  <div class="flex gap-2">
                    <!-- icon  -->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                    <p>${post.view_count}</p>
                  </div>
                  <!-- count-3  -->
                  <div class="flex gap-2">
                    <!-- icon  -->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <p>${post.posted_time} min</p>
                  </div>
                </div>
                <!-- button  -->
                <button onclick="markAsRead('${post.description}', '${post.view_count}')" class="btn rounded-full bg-[#10B981] mt-5 lg:mt-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
            `
            postContainer.appendChild(div);
        });
}

const markAsRead= (description, viewCount) =>{
    // console.log(description, viewCount)

    const selectedItem = document.getElementById('selected_Item');

    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card-body flex-row items-center gap-6">
                    <h2 class="card-title">
                      ${description}
                    </h2>
                    <!-- count-1  -->
                    <div class="flex gap-2">
                      <!-- icon  -->
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>

                      <p>${viewCount}</p>
                    </div>
                  </div>
    `
            selectedItem.appendChild(div);

            const readCount = document.getElementById('read_count').innerText;
            const count = Number(readCount);

            const incrementCount = count + 1;
            document.getElementById('read_count').innerText = incrementCount;
}
loadPostAll();
const searchByCategory = () => {
        const searchText = document.getElementById('search').value;
        loadPostAll(searchText);
}