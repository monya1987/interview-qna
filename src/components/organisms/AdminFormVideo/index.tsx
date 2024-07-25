// 'use client';
//
// import { Libraries } from '@/global';
// import { useForm, Controller } from 'react-hook-form';
//
// export default function AddVideoForm() {
//   const {
//     register,
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const handleSuccess = async (data: any) => {
//     console.log(999, data, process.env.URL, errors);
//     const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/videos`, {
//       method: 'POST',
//       body: JSON.stringify(data),
//     });
//
//     console.log('res front', res);
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit(handleSuccess)}>
//         <div className="mb-3" controlId="name">
//           <input className="form-control" placeholder="Enter video name" {...register('name', { required: true })} />
//         </div>
//         <div className="mb-3" controlId="grade">
//           <input className="form-control" placeholder="Enter grade: Middle" {...register('grade', { required: true })} />
//         </div>
//         <div className="mb-3" controlId="date">
//           <input className="form-control" placeholder="Enter date: 31.12.2024" {...register('date', { required: true })} />
//         </div>
//         <div className="mb-3" controlId="ylink">
//           <input className="form-control" placeholder="Enter YouTube link" {...register('ylink', { required: true })} />
//         </div>
//         <div className="mb-3">
//           <select className="form-control" {...register('library')}>
//             {Object.values(Libraries).map((name) => (
//               <option key={name} value={name}>{name}</option>
//             ))}
//           </select>
//         </div>
//         <div className="mb-3" controlId="isMocked">
//           <Controller
//             name="isMocked"
//             defaultValue={false}
//             control={control}
//             render={({ field }) => (
//               <Form.Check
//                 {...field}
//                 type="checkbox"
//                 id="isMocked"
//                 label="Is mocked ?"
//               />
//             )}
//           />
//         </div>
//         <div>
//           <Controller
//             name="hasCoding"
//             defaultValue={false}
//             control={control}
//             render={({ field }) => (
//               <div
//                 {...field}
//                 type="checkbox"
//                 id="hasCoding"
//                 label="Has Coding ?"
//               />
//             )}
//           />
//         </div>
//         <button type="submit">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }
