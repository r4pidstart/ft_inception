# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Makefile                                           :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: tjo <tjo@student.42seoul.kr>               +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2023/09/06 01:27:37 by tjo               #+#    #+#              #
#    Updated: 2023/09/07 17:44:53 by tjo              ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

all: up

up:
	docker-compose -f ./srcs/docker-compose.yml up -d
down:
	docker-compose -f ./srcs/docker-compose.yml down
re:
	bash ./srcs/clean.sh
	docker-compose -f ./srcs/docker-compose.yml build --parallel
	docker-compose -f ./srcs/docker-compose.yml up -d
clean:
	bash clean.sh