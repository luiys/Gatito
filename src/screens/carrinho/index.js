import React from "react";
import { SafeAreaView, KeyboardAvoidingView, Platform, StatusBar, FlatList } from "react-native";
import Item from "./item";
import estilosGlobal from "../../estilos";

const services = [
	{
		id: 1,
		nome: "Banho",
		preco: 79.9,
		descricao: "Descricao teste",
		quantidade: 1,
	},
	{
		id: 2,
		nome: "Vacina V4",
		preco: 89.9,
		descricao: "Uma dose da vacina V4",
		quantidade: 0,
	},
	{
		id: 3,
		nome: "Vacina Antirrábica",
		preco: 99.9,
		descricao: "Uma dose da vacina Antirrábica",
		quantidade: 2,
	},
	{
		id: 4,
		nome: "A",
		preco: 35.9,
		descricao: "Tose o seu pet com a gente, tose o seu pet com profissionais",
		quantidade: 1,
	},
];

export default function carrinho() {
	return (
		<SafeAreaView styles={estilosGlobal.preencher}>
			<StatusBar />
			<KeyboardAvoidingView styles={estilosGlobal.preencher} behavior={Platform.OS === "ios" ? "padding" : "height"}>
				<FlatList
					data={services}
					renderItem={({ item }) => {
						return <Item {...item} />;
					}}
					keyExtractor={({ id }) => String(id)}
				/>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
}
