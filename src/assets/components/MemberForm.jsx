import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  fullName: z.string().min(1, "Nome completo é obrigatório."),
  email: z.string().email("Insira um e-mail válido."),
  phone: z.string().min(10, "Telefone é obrigatório."),
  role: z.enum(
    [
      "Desenvolvedor Frontend",
      "Desenvolvedor Backend",
      "Desenvolvedor Full Stack",
      "Desenvolvedor Mobile",
      "Desenvolvedor de Software",
      "Engenheiro de Software",
      "Arquiteto de Software",
      "UI/UX Designer",
      "Analista de Sistemas",
      "Analista Programador",
      "DevOps Engineer",
      "Engenheiro de Dados",
      "QA Engineer",
      "Scrum Master",
      "Product Owner",
    ],
    "Escolha um cargo."
  ),
  linkedin: z.string().optional(),
  github: z.string().optional(),
});

const MemberForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    try {
      localStorage.setItem("memberData", JSON.stringify(data));
      alert("Cadastro realizado com sucesso!");
      reset(); // Limpar formulário após o cadastro
    } catch (error) {
      alert("Falha ao cadastrar. Verifique os dados informados.");
    }
  };

  return (
    <div className="max-w-lg mx-auto my-10 p-5 border rounded shadow">
      <h2 className="text-xl font-bold mb-5">Cadastro de Membro</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Nome Completo</label>
          <input
            type="text"
            {...register("fullName")}
            className="w-full p-2 border rounded"
          />
          {errors.fullName && (
            <p className="text-red-500">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">E-mail</label>
          <input
            placeholder="exemplo@email.com"
            type="email"
            {...register("email")}
            className="w-full p-2 border rounded"
          />
          {errors.email && <p className="text-red-500">{errors.b}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Telefone</label>
          <input
            placeholder="DDD+Número"
            type="text"
            {...register("phone")}
            className="w-full p-2 border rounded"
          />
          {errors.phone && (
            <p className="text-red-500">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Cargo Pretendido</label>
          <select {...register("role")} className="w-full p-2 border rounded">
            <option value="">Selecione o cargo</option>
            <option value="Desenvolvedor Frontend">
              Desenvolvedor Frontend
            </option>
            <option value="Desenvolvedor Backend">Desenvolvedor Backend</option>
            <option value="Desenvolvedor Full Stack">
              Desenvolvedor Full Stack
            </option>
            <option value="Desenvolvedor Mobile">Desenvolvedor Mobile</option>
            <option value="Desenvolvedor de Software">
              Desenvolvedor de Software
            </option>
            <option value="Engenheiro de Software">
              Engenheiro de Software
            </option>
            <option value="Arquiteto de Software">Arquiteto de Software</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="Analista de Sistemas">Analista de Sistemas</option>
            <option value="Analista Programador">Analista Programador</option>
            <option value="DevOps Engineer">DevOps Engineer</option>
            <option value="Engenheiro de Dados">Engenheiro de Dados</option>
            <option value="QA Engineer">QA Engineer</option>
            <option value="Scrum Master">Scrum Master</option>
            <option value="Product Owner">Product Owner</option>
          </select>
          {errors.role && <p className="text-red-500">{errors.role.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">
            LinkedIn (Opcional)
          </label>
          <input
            type="url"
            {...register("linkedin")}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">GitHub (Opcional)</label>
          <input
            type="url"
            {...register("github")}
            className="w-full p-2 border rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors font-bold"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default MemberForm;
