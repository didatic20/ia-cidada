############################################################
# Dockerfile to build
# Based on Ubuntu 18.04
############################################################

FROM ubuntu:18.04

# UBUNTU UPGRADE
RUN apt update
RUN apt -y upgrade

# GENERAL PACKAGES
RUN apt install -y python-gi
RUN apt install nano -y
RUN apt install -y curl
RUN apt -y install git
RUN apt -y install wget

# INSTALL PYTHON 3.7
RUN apt install -y software-properties-common
RUN add-apt-repository ppa:deadsnakes/ppa -y && apt update
RUN apt install -y python3.7

# PIP INSTALL
RUN apt install -y python3-pip
RUN pip3 install --upgrade pip

# FLASK INSTALL
RUN pip3 install flask
#RUN pip3 install flask-sockets

# CONTAINER CONFIGURATION
WORKDIR /var/www/
EXPOSE 5000
EXPOSE 22


