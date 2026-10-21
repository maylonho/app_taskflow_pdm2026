import api from "./api";

export async function listarTarefas() {
    const resposta = await api.get('/tarefas');
    return resposta.data;
}

export async function buscarTarefas(id: any) {
    const resposta = await api.get(`/tarefas/${id}`);
    return resposta.data;
}

export async function criarTarefas(tarefa:any) {
    const resposta = await api.post('/tarefas', tarefa);
    return resposta.data;
}

export async function atualizarTarefas(id: string, tarefa:any) {
    const resposta = await api.put(`/tarefas/${id}`, tarefa);
    return resposta.data;
}

export async function excluirTarefa(id: string){
    await api.delete(`/tarefas/${id}`);
}