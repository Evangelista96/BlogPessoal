import { IsNotEmpty } from "class-validator"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn,CreateDateColumn } from "typeorm"
import { Tema } from "../../tema/entities/tema.entity"
import { Usuario } from "../../usuario/enitities/usuario.entity"


@Entity({ name: "tb_postagens" }) 
export class Postagem {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({ length: 100, nullable: false }) 
    titulo: string

    @IsNotEmpty()
    @Column({ length: 1000, nullable: false }) 
    texto: string

    @CreateDateColumn() 
    data: Date

    @UpdateDateColumn() 
    dataAtualizacao: Date

    @ManyToOne(() => Tema, (tema) => tema.postagem, {
        onDelete: "CASCADE"
    })
    tema: Tema

    @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
        onDelete: "CASCADE"
    })
    usuario: Usuario
}