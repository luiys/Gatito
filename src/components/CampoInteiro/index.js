import React from "react";
import { TextInput } from "react-native";
import estilosPadrao from "./estilos";

export default function CampoInteiro({ valor, acao, estilos }) {
	const atualiza = (novoValor, acaoRetorno) => {
		const verificaInteiro = novoValor.match(/^[0-9]*$/);
		if (!verificaInteiro) return;

		//se começar com zero, e tiver algo depois dele, sobescreve por aquilo depois dele
		const removeZeroEsquerda = novoValor.replace(/^(0)(.+)/, "$2");

		acaoRetorno(removeZeroEsquerda);
	};

	const numeroEmTexto = String(valor);
	return (
		<TextInput
			style={[estilosPadrao.campo, estilos]}
			keyboardType="number-pad"
			selectTextOnFocus
			value={numeroEmTexto}
			onChangeText={(novoValor) => {
				atualiza(novoValor, acao);
			}}
		/>
	);
}
