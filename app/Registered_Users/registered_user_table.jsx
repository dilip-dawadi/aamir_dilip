import React from 'react';
import people from './table.data.json' assert {type: 'json'}
import RegesterdUserTable from './component/user_table';
import { NavBar } from '@/components/navbar/NavBar';


function UserTable() {
    // Sample user data array
    const users = Array.from({ length: 50 }, (_, index) => ({
        id: index + 1,
        name: `User ${index + 1}`,
        rank: index % 3 === 0 ? 'Admin' : 'User',
        active: index % 2 === 0 ? true : false
    }));

    return (
		  
        <div className="px-4 sm:px-6 lg:px-8 sm:py-6 bg-zinc-400 w-full max-h-full">
			<div className="sm:flex sm:items-center">
				<div className="sm:flex-auto">
					<h1 className="text-base font-semibold leading-6 text-gray-900">Users</h1>
					<p className="mt-2 text-sm text-gray-700">A list of all the users in your account including their name, title, email and role.</p>
				</div>
				<div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
					<button
						type="button"
						className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
						Export
					</button>
				</div>
				
			</div> 
			<RegesterdUserTable users={people} />
		</div>
    );
}

export default UserTable;
