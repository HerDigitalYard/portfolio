// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { insertMessageSchema, type InsertMessage } from "@shared/schema";
// import { useSubmitContact } from "@/hooks/use-contact";
// import { Loader2 } from "lucide-react";
// import { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

// export function ContactForm() {
//   const formRef = useRef<HTMLDivElement>(null);

//   useGSAP(
//     () => {
//       gsap.from(formRef.current, {
//         scrollTrigger: {
//           trigger: formRef.current,
//           start: "top 80%",
//         },
//         y: 50,
//         opacity: 0,
//         duration: 1,
//         ease: "power3.out",
//       });
//     },
//     { scope: formRef }
//   );

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm<InsertMessage>({
//     resolver: zodResolver(insertMessageSchema),
//   });

//   const { mutate, isPending } = useSubmitContact();

//   const onSubmit = (data: InsertMessage) => {
//     mutate(data, {
//       onSuccess: () => reset(),
//     });
//   };

//   return (
//     <section
//       id="contact"
//       className="py-24 md:py-32 bg-background relative overflow-hidden"
//     >
//       {/* Decorative blob */}
//       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

//       <div className="container mx-auto px-6 max-w-4xl">
//         <div
//           ref={formRef}
//           className="bg-card border border-border/50 shadow-2xl shadow-black/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm"
//         >
//           <div className="text-center mb-12">
//             <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
//               Let's work together
//             </h2>
//             <p className="text-muted-foreground text-lg">
//               Have a project in mind? I'd love to hear from you.
//             </p>
//           </div>

//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="space-y-2">
//                 <label className="text-sm font-medium ml-1">Name</label>
//                 <input
//                   {...register("name")}
//                   placeholder="John Doe"
//                   className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-transparent focus:bg-background focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all outline-none"
//                 />
//                 {errors.name && (
//                   <p className="text-destructive text-sm ml-1">
//                     {errors.name.message}
//                   </p>
//                 )}
//               </div>

//               <div className="space-y-2">
//                 <label className="text-sm font-medium ml-1">Email</label>
//                 <input
//                   {...register("email")}
//                   type="email"
//                   placeholder="john@example.com"
//                   className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-transparent focus:bg-background focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all outline-none"
//                 />
//                 {errors.email && (
//                   <p className="text-destructive text-sm ml-1">
//                     {errors.email.message}
//                   </p>
//                 )}
//               </div>
//             </div>

//             <div className="space-y-2">
//               <label className="text-sm font-medium ml-1">Message</label>
//               <textarea
//                 {...register("message")}
//                 rows={5}
//                 placeholder="Tell me about your project..."
//                 className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-transparent focus:bg-background focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all outline-none resize-none"
//               />
//               {errors.message && (
//                 <p className="text-destructive text-sm ml-1">
//                   {errors.message.message}
//                 </p>
//               )}
//             </div>

//             <button
//               type="submit"
//               disabled={isPending}
//               className="w-full md:w-auto px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 mx-auto"
//             >
//               {isPending ? (
//                 <>
//                   <Loader2 className="w-5 h-5 animate-spin" />
//                   Sending...
//                 </>
//               ) : (
//                 "Send Message"
//               )}
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }
