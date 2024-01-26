cd ../
python3 -m virtualenv .env
wait
source .env/bin/activate
cd ./xavier-connect
echo -e '\n\n ########## Installing python packages ###########'
pip3 install -r ./xconnect_backend/requirements.txt
wait
### django setup ###
cd ./xconnect_backend
python3 manage.py migrate
wait
python manage.py collectstatic
wait

### react setup ###
echo -e '\n\n ########## Installing react packages ###########'
cd ../xconnect_frontend/xconnect
npm i
wait
npm run build
sudo npm install -g serve
wait
echo "####################################"
echo "Setup Complete"
