import React, {Component} from 'react';
import {View,Text,Image,TouchableOpacity, TextInput, StyleSheet} from 'react-native';

class Lista extends Component{
constructor(props){
    super(props);
    this.state = {
        feed: this.props.data
    };
    this.carregaIcone = this.carregaIcone.bind(this);
    this.mostraLikes = this.mostraLikes.bind(this);
    this.like = this.like.bind(this);
    this.pegaComentario = this.pegaComentario.bind(this);
}

pegaComentario(texto){
    let feed = this.state.feed;
    this.setState({
    feed:{
        ...feed,
        novaDescricao: feed.novaDescricao
    }
    });

}

carregaIcone(likeada){
    return likeada ? require('../img/likeada.png') : require('../img/like.png')

}

like(){
    let feed = this.state.feed;

    if(feed.likeada === true){
        this.setState({
            feed:{
                ...feed,
                likeada: false,
                likers: feed.likers - 1
            }
        });
    }
    else{
        this.setState({
            feed:{
                ...feed,
                likeada: true,
                likers: feed.likers + 1
            }
        });
    }
}

mostraLikes(likers){
    let feed = this.state.feed; // desconstruir para poder acessar somente com>>feed.likers
    if(feed.likers <= 0){
        return;
    }
    return(
        <Text style={styles.likes}>
            {feed.likers} {feed.likers > 1 ? 'curtidas': 'curtida'}
        </Text>
    )
}

    render(){
        return(
            <View style={styles.areaFeed}>
                <View style={styles.viewPerfil}>
                    <Image 
                    source={{uri: this.state.feed.imgperfil}}
                    style={styles.fotoPerfil}
                    />

                    <Text style={styles.nomeUsuario}>{this.state.feed.nome}</Text>                
                </View>

                    <Image
                    resizeMode="cover"
                    style={styles.fotoPublicacao}
                    source={{uri: this.state.feed.imgPublicacao}}
                    />

                <View style={styles.areaBtn}>
                    <TouchableOpacity onPress={this.like}>
                      <Image
                      source={this.carregaIcone(this.state.feed.likeada)}
                      style={styles.iconeLike}
                      />  
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnSend}>
                      <Image
                      source={require('../img/send.png')}
                      style={styles.iconeLike}
                      />  
                    </TouchableOpacity>
                </View>

                {this.mostraLikes(this.state.feed.likers)}


                <View style={styles.comentario}>
                    <Image
                    style={styles.fotoComentario}
                    source={require('../img/perfil.jpg')}
                    />
                    <TextInput 
                    style={styles.campoComentario}
                    placeholder = "Adicione um comentário..."
                    underlineColorAndroid="transparent"
                    onChangeText= {this.pegaComentario}
                    />
                </View>
               
              

                

                <View style={styles.viewRodape}>
                 <Text style={styles.nomeRodape}>
                     {this.state.feed.nome}
                 </Text>
                 <Text style={styles.descRodape}>
                     {this.state.feed.descricao}
                 </Text>   
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    areaFeed:{

    },
    nomeUsuario:{
        fontSize: 22,
        textAlign: 'left',
        color:'black',
        padding:8,
    },
    fotoPerfil:{
        width:50,
        height:50,
        borderRadius:25,
    },
    fotoPublicacao:{
        flex:1,
        height:400,
        alignItems:'center'
    },
    viewPerfil:{
        flexDirection:'row',
        flex:1,
        alignItems:'center',
        padding:8,
    },
    areaBtn:{
        flexDirection: 'row',
        padding: 5,        
    },
    iconeLike:{
        width:33,
        height:33,
    },
    btnSend:{
        paddingLeft:5,
    },
    viewRodape:{
        flexDirection:'row',
        alignItems:'center',
    },
    descRodape:{
        paddingLeft: 5,
        fontSize: 15,
        color: 'black',
    },
    nomeRodape:{
        fontSize: 18,
        fontWeight: 'bold',
        color:'black',
        paddingLeft: 5,
    },
    likes:{
        fontWeight: 'bold',
        marginLeft: 5,
    },
    campoComentario:{
        margin: 10,
        fontSize: 15,
        textAlign: 'left',
        
        
    },
    fotoComentario:{
        flexDirection:'row',
        width:50,
        height:50,
        borderRadius:25,
        alignItems:'center',
        padding: 5,            

    },
    comentario:{
        flexDirection:'row',
        padding: 10,
        

    },


    

});

export default Lista; 


