const History = () => {
    return (
        <section class="dark:bg-gray-900">
            <div class="container px-6 py-10 mx-auto">
                <div class="text-center">
                    <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Your Recipes</h1>
                </div>

                <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
                    <div>
                        <div class="relative">
                            <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                            <div class="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
                                <img class="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                                <div class="mx-4">
                                    <h1 class="text-sm text-gray-700 dark:text-gray-200">Tom Hank</h1>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">Creative Director</p>
                                </div>
                            </div>
                        </div>

                        <h1 class="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
                            What do you want to know about UI
                        </h1>

                        <hr class="w-32 my-6 text-blue-500" />

                        <p class="text-sm text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores
                            praesentium, alias nam? Tempore
                        </p>


                        {/* Update and Delete Buttons */}
                        <div class="mt-4 flex space-x-4">
                            <button class="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Update</button>
                            <button class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
                        </div>
                    </div>

                    {/* Repeat for other blog posts */}
                    <div>
                        <div class="relative">
                            <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                            <div class="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
                                <img class="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                                <div class="mx-4">
                                    <h1 class="text-sm text-gray-700 dark:text-gray-200">arthur melo</h1>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">Creative Director</p>
                                </div>
                            </div>
                        </div>

                        <h1 class="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
                            All the features you want to know
                        </h1>

                        <hr class="w-32 my-6 text-blue-500" />

                        <p class="text-sm text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores
                            praesentium, alias nam? Tempore
                        </p>


                        {/* Update and Delete Buttons */}
                        <div class="mt-4 flex space-x-4">
                            <button class="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Update</button>
                            <button class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
                        </div>
                    </div>

                    {/* Add more blog posts similarly */}
                </div>
            </div>
        </section>
    );
};

export default History;
