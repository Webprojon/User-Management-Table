import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { RiDeleteBin5Fill, RiErrorWarningFill } from "react-icons/ri";
import { FadeLoader } from "react-spinners";
import { AppDispatch, RootState } from "../redux/store/Store";
import { fetchUsers, setFilter } from "../redux/slices/User-Slices";
import { UserDataType } from "../lib/data";
import { BsSearch } from "react-icons/bs";

const UsersList: React.FC = () => {
	const dispatch: AppDispatch = useDispatch();
	const { loading, users, filters } = useSelector(
		(state: RootState) => state.users,
	);

	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		dispatch(setFilter({ [name]: value }));
	};

	const filteredUsers = users.filter(
		(user) =>
			user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
			user.username.toLowerCase().includes(filters.username.toLowerCase()) &&
			user.email.toLowerCase().includes(filters.email.toLowerCase()) &&
			user.phone.toLowerCase().includes(filters.phone.toLowerCase()),
	);

	if (loading) {
		return (
			<div className="flex justify-center items-center h-full">
				<FadeLoader color="#ccc" loading={loading} />
			</div>
		);
	}

	return (
		<section className="pt-16 mx-auto max-w-[1200px] tracking-wider font-medium">
			<div className="mb-4 flex justify-between items-center text-slate-400">
				<div className="flex gap-x-4">
					{["name", "username", "email", "phone"].map((field) => (
						<div className="relative" key={field}>
							<BsSearch className="absolute left-3 top-1/2 -translate-y-1/2" />
							<input
								type={field === "phone" ? "number" : "text"}
								name={field}
								autoComplete="off"
								placeholder={`Search by ${field}`}
								value={filters[field as keyof typeof filters]}
								onChange={handleFilterChange}
								className="w-[220px] pl-10 px-3 py-2 bg-slate-800 rounded-[4px] outline-none placeholder:text-slate-400"
							/>
						</div>
					))}
				</div>

				<button className="bg-slate-800 flex items-center px-3 py-2 rounded-[4px] hover:scale-105 active:scale-100 transition-all">
					<MdFormatListBulletedAdd className="mr-2" />
					Add New User
				</button>
			</div>

			<main className="rounded-[4px] h-[70vh] overflow-y-scroll no-scrollbar">
				<table className="w-full text-sm text-left rtl:text-right">
					<thead className="sticky top-0 text-md text-slate-400 uppercase bg-slate-800">
						<tr>
							<th className="p-5">Name</th>
							<th className="p-5">Username</th>
							<th className="p-5">Email</th>
							<th className="p-5">Phone</th>
							<th className="p-5">Actions</th>
						</tr>
					</thead>

					<tbody>
						{filteredUsers.length > 0 ? (
							filteredUsers.map((user: UserDataType) => (
								<tr
									key={user.id}
									className="border-b bg-slate-300 text-slate-700 border-slate-500"
								>
									<td className="px-5 py-4">{user.name}</td>
									<td className="px-5 py-4">{user.username}</td>
									<td className="px-5 py-4">{user.email}</td>
									<td className="px-5 py-4">{user.phone}</td>
									<td className="mt-3 ml-4 flex items-center gap-x-5 cursor-pointer transition-all">
										<FaEdit className="size-7 text-sky-600 hover:scale-105" />
										<RiDeleteBin5Fill className="size-7 text-red-500 hover:scale-105" />
									</td>
								</tr>
							))
						) : (
							<div className="h-[20vh] bg-slate-300 w-[1200px] flex justify-center items-center text-lg rounded-b-[4px]">
								<RiErrorWarningFill className="size-6 mr-2 text-amber-600" />
								<span>No such user data found</span>
							</div>
						)}
					</tbody>
				</table>
			</main>
		</section>
	);
};

export default UsersList;
